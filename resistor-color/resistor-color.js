//
// This is only a SKELETON file for the 'Resistor Color' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const colorCode = (color) => {
 if (color == 'black') return 0;
 if (color == 'white') return 9;
 if (color == 'orange') return 3;
 if (color == 'brown') return 1;
 if (color == 'red') return 2;
 if (color == 'yellow') return 4;
 if (color == 'green') return 5;
 if (color == 'blue') return 6;
 if (color == 'violet') return 7;
 if (color == 'grey') return 8;
 return -1;
};

export const COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
];
