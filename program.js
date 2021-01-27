// Add new functions, variables here

function snt(input, i, arr) {
  while (input != 1) {
    if (input % i == 0) {
      arr= arr+i+" ";
      input = input / i
    } else {
      i++
    }
  }
  return console.log(arr);

}
function main(input) {

  let arr = "";
  let i = 2;
  if (input == 1) {
    console.log("1")
  } else if (input == 0) {
    console.log("0")
  } else {
    snt(input, i, arr);
    
  }
}
module.exports = main;
