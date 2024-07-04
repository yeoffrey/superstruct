import os
import re


# Function to convert snake_case or kebab-case to camelCase
def snake_to_camel_case(name):
    parts = re.split(r"[_-]", name)
    return parts[0] + "".join(x.title() for x in parts[1:])


# Function to process each file
def process_file(file_path):
    print(f"Processing file: {file_path}")

    # Read original file content
    with open(file_path, "r") as f:
        lines = f.readlines()

    # Get filename without extension and convert to camelCase
    filename = os.path.basename(file_path)
    filename_without_ext = os.path.splitext(filename)[0]
    camel_case_name = snake_to_camel_case(filename_without_ext)

    # Add import statement
    import_statement = "import {Test} from '../../types'\n"

    # Start building modified content
    modified_content = import_statement
    found_export_const = False
    inside_export_block = False
    export_const_lines = []

    # Process each line
    for line in lines:
        if not found_export_const and line.startswith("export const"):
            found_export_const = True

        if found_export_const:
            if line.startswith("export const"):
                # Step 1: Remove "export const"
                modified_line = line.replace("export const", "", 1)

                # Step 2: Replace "=" with ":"
                modified_line = re.sub(r"\s*=\s*", ": ", modified_line)

                # Step 3: Check and adjust line ending
                if modified_line.rstrip().endswith("{"):
                    inside_export_block = True
                    modified_line = modified_line.rstrip()[:-1] + " {\n"
                elif inside_export_block and modified_line.lstrip().startswith("}"):
                    inside_export_block = False
                    modified_line = modified_line.rstrip() + ",\n"
                else:
                    modified_line = modified_line.rstrip() + ",\n"

                # Store the modified line
                export_const_lines.append(modified_line)
            elif inside_export_block:
                # Indent and format lines inside the export const block
                if line.strip() and not line.strip().startswith("//"):
                    # Check if line is an object line
                    if re.match(r"^\s*[\w$]+:\s*{", line.strip()):
                        export_const_lines.append(f"  {line.strip()}\n")
                    else:
                        export_const_lines.append(f"    {line.strip()}\n")
                    if line.strip().endswith("}"):
                        export_const_lines[-1] += ","  # Add comma after closing brace
            else:
                # Append unchanged line to content before finding export const
                modified_content += line
        else:
            # Append unchanged line to content before finding export const
            modified_content += line

    if found_export_const:
        # Construct the final content
        modified_content += f"\nexport const {camel_case_name}Test: Test = {{\n"
        modified_content += "".join(export_const_lines)
        modified_content += "}\n"

        # Write modified content back to the file
        with open(file_path, "w") as f:
            f.write(modified_content)

        print(f"File processed: {file_path}")
    else:
        print(f"No 'export const' found in file: {file_path}")


# Main function to recursively process all .ts files in ./test/validation directory
def main():
    base_dir = os.getcwd()  # Get current working directory
    directory = os.path.join(base_dir, "test", "validation")

    transformed_count = 0
    # Recursively walk through directory and subdirectories
    for root, _, files in os.walk(directory):
        for filename in files:
            if filename.endswith(".ts"):
                file_path = os.path.join(root, filename)
                process_file(file_path)
                transformed_count += 1

    print(f"Transformation completed. Total files transformed: {transformed_count}")


if __name__ == "__main__":
    main()
