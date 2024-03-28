const student = {
  name: 'John Doe',
};

// Add the getKeys() method to the Object prototype
Object.prototype.getKeys = function () {
  return Object.keys(this);
};

// Example usage:
console.log(student.getKeys());