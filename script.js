const byteSize = (str) => {
  // write your code here
	return new Blob([str]).length
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
