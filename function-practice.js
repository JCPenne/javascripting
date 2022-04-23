function makeLine(length) {
  let line = "";
  for (let j = 1; j <= length; j++) {
      line += "* ";
  }
  return line + "\n";
}


function makeTriangle() {
  let line = ""
  for (let k = 10; k >= 0; k--) {
    for (let l = k-1; l >= 0; l--) {
      line = line - "* "
  }
  line = line - "* " + "\n";
  return line
}
}
console.log(makeTriangle(10));