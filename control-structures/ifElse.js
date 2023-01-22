//  Developer: Wanderley Júnior - Systems Analyst
//  Instagram: @devwanderley
//  Github: devwanderley

function approval(note) {
  if (note >= 7) {
    console.log("Approval: ", note);
  } else {
    console.log("Disapproved: ", note);
  }
}

approval(8);
approval(6.2);
approval("6.3");
