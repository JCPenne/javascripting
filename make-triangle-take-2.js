function makeLine(length) {
  let line = "";
  for (i = 1; i <= length; i++) {
    line += "* ";
  }
  return line + " \n";
}

function makeTriangle(length) {
  let triangle = "";
  
  let lineNumber = 1

  for (lineNumber = 1; lineNumber <= length; lineNumber++) {
    triangle += makeLine(lineNumber);
  }
  return triangle
}
console.log(makeTriangle(10));