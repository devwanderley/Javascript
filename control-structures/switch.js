//  Developer: Wanderley Júnior - Systems Analyst
//  Instagram: @devwanderley
//  Github: devwanderley

function printResult(note) {
  switch (Math.floor(note)) {
    case 10:
    case 9:
    case 8:
      console.log("Happy birthday! Note: ", note);
      break;
    case 7:
      console.log("Approved, lucky: ", note);
      break;
    case 6:
    case 5:
    case 4:
    case 3:
    case 2:
    case 1:
    case 0:
      console.log("Disapproved: ", note);
      break;
    default:
      console.log("Invalid note!");
  }
}
printResult(7);
printResult(10);
printResult(3);
printResult(20);
printResult("2");