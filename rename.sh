#!/bin/bash

# Function to rename .ts files to .test.ts recursively
rename_ts_files() {
  local dir="$1"
  # Loop through each file and directory in the current directory
  for entry in "$dir"/*; do
    if [[ -f "$entry" ]]; then
      # If it's a file, check if it ends with .ts
      if [[ "$entry" == *.ts ]]; then
        # Rename the file to end with .test.ts
        mv "$entry" "${entry%.ts}.test.ts"
        echo "Renamed $entry to ${entry%.ts}.test.ts"
      fi
    elif [[ -d "$entry" ]]; then
      # If it's a directory, recursively call the function
      rename_ts_files "$entry"
    fi
  done
}

# Navigate to the directory where your .ts files are located
cd "$(dirname "$0")/test/validation"

# Call the function to rename .ts files recursively
rename_ts_files "$(pwd)"
