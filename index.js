const app = "I don't do much."
function moveDodgerRight() {
  var rightNumbers = dodger.style.left.replace('px', '')
  var right = parseInt(rightNumbers, 10)
 
  if (right > 0) {
    dodger.style.left = `${right + 10}px`}}

