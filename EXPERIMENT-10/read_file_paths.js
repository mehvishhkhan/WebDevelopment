const fs = require('fs');

// Read the file path from the command line arguments
const filePath = process.argv[2];

if (!filePath) {
  console.error('Usage: node read_file_paths.js <file_path>');
  process.exit(1);
}

// Read the file asynchronously
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error(`Error reading file: ${err.message}`);
    process.exit(1);
  }

  // Split the file contents into an array of lines
  const filePaths = data.trim().split('\n');

  // Process each file path
  filePaths.forEach((path, index) => {
    console.log(`Line ${index + 1}: ${path}`);
  });
});
