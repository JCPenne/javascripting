function finalPosition (moves) {
  let position = [0,0];

  for (const eachMove of moves) {
    switch (eachMove) {
    case 'north':
      position[1] += 1;
      break;
    case 'south':
      position[1] -= 1;
      break;
    case 'east':
      position[0] += 1;
      break;
    case 'west':
      position[0] -= 1;
    }
  }
  return position
}


const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north']  

const result = finalPosition(moves);
console.log(result);