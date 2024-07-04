export default function transformer(file, api) {
  const j = api.jscodeshift

  // Variables we want to transform and collect
  const variablesToTransform = [
    'Struct',
    'data',
    'create',
    'output',
    'failures',
  ]

  // Object to store the properties of the collected variables
  const objectProperties = {}

  // Parse the source code using jscodeshift
  const root = j(file.source)

  // Find all export declarations and process them
  root.find(j.ExportNamedDeclaration).forEach((path) => {
    const declaration = path.node.declaration

    // Check if the declaration is a variable declaration
    if (declaration.type === 'VariableDeclaration') {
      const declarations = declaration.declarations

      declarations.forEach((declarator) => {
        const { name } = declarator.id

        // Check if the current variable is in our list
        if (variablesToTransform.includes(name)) {
          // Store the variable value as an object property
          if (name === 'data') {
            // Duplicate 'data' into 'struct' if it exists
            if (objectProperties.data) {
              throw new Error('Variable "struct" already exists.')
            }

            objectProperties.data = declarator.init
          } else {
            // For other variables, store normally
            objectProperties[name] = declarator.init

            // Remove the variable declaration from the source code
            j(path).remove()
          }
        }
      })
    }
  })

  // If we collected any properties, create an export statement for 'test'
  if (Object.keys(objectProperties).length > 0) {
    // Create the 'test' object with collected properties
    const testObject = j.variableDeclaration('const', [
      j.variableDeclarator(
        j.identifier('test'),
        j.objectExpression([
          // Add properties from objectProperties
          ...Object.keys(objectProperties).map((key) =>
            j.property('init', j.identifier(key), objectProperties[key])
          ),
          // Add filename as 'name' attribute
          j.property(
            'init',
            j.identifier('name'),
            j.literal(file.path.slice(0, file.path.lastIndexOf('.')))
          ),
        ])
      ),
    ])

    // Append the 'test' export statement to the end of the file
    root.get().node.program.body.push(j.exportNamedDeclaration(testObject, []))

    // Insert an import statement for myFunction if it's not already imported
    const importPath = '../../testRunner' // Adjust the path to your module
    const imports = root.find(j.ImportDeclaration, {
      source: { value: importPath },
    })

    if (imports.size() === 0) {
      const importStatement = j.importDeclaration(
        [j.importSpecifier(j.identifier('testRunner'))],
        j.literal(importPath)
      )
      root.get().node.program.body.unshift(importStatement)
    }

    // Call myFunction with 'test' as an argument
    const myFunctionCall = j.expressionStatement(
      j.callExpression(j.identifier('testRunner'), [j.identifier('test')])
    )
    root.get().node.program.body.push(myFunctionCall)
  }

  // Return the modified source code
  return root.toSource()
}
