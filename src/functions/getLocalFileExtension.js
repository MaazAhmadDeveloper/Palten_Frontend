export function getFileExtension(filename) {
  if (typeof filename !== 'string') {
    throw new TypeError('Expected a string as the filename');
  }

  const lastIndex = filename.lastIndexOf('.');
  if (lastIndex === -1) return ''; // No extension found
  return filename.slice(lastIndex + 1).toLowerCase();
}


export function getFileNameWithoutExtension(filename) {
  // Find the last dot position to get the extension
  const lastDotIndex = filename.lastIndexOf('.');
  
  if (lastDotIndex === -1) {
      // No dot found, return the original filename
      return filename;
  } else {
      // Extract the filename without extension
      return filename.substring(0, lastDotIndex);
  }
}