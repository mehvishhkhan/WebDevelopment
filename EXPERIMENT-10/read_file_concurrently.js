const fs = require('fs-extra');
const path = require('path');

async function readFilesConcurrently(filePaths) {
  const errorLogStream = fs.createWriteStream('error.log');

  const readAndLogError = async (filePath) => {
    try {
      const content = await fs.readFile(filePath, 'utf8');
      console.log(`Content of ${filePath}:\n${content}\n`);
    } catch (error) {
      console.error(`Error reading ${filePath}: ${error.message}`);
      errorLogStream.write(`Error reading ${filePath}: ${error.message}\n`);
    }
  };

  const readPromises = filePaths.map((filePath) => readAndLogError(filePath));
  await Promise.all(readPromises);

  errorLogStream.end();
}

const filePaths = [
  'C:/Users/MEHVISH/Downloads/file1.txt',
  'C:/Users/MEHVISH/Downloads/file2.txt',
  'C:/Users/MEHVISH/Downloads/file3.txt',
  'C:/Users/MEHVISH/Downloads/file4.txt',
  // Add more file paths here
];

readFilesConcurrently(filePaths);
