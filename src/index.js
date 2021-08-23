

function decode(expr) {
   
    // write your solution here
    const MORSE_TABLE = {
        '.-':     'a',
        '-...':   'b',
        '-.-.':   'c',
        '-..':    'd',
        '.':      'e',
        '..-.':   'f',
        '--.':    'g',
        '....':   'h',
        '..':     'i',
        '.---':   'j',
        '-.-':    'k',
        '.-..':   'l',
        '--':     'm',
        '-.':     'n',
        '---':    'o',
        '.--.':   'p',
        '--.-':   'q',
        '.-.':    'r',
        '...':    's',
        '-':      't',
        '..-':    'u',
        '...-':   'v',
        '.--':    'w',
        '-..-':   'x',
        '-.--':   'y',
        '--..':   'z',
        '.----':  '1',
        '..---':  '2',
        '...--':  '3',
        '....-':  '4',
        '.....':  '5',
        '-....':  '6',
        '--...':  '7',
        '---..':  '8',
        '----.':  '9',
        '-----':  '0',
    };
    
 const pattern = new RegExp(".{1,10}", "g");
 const arr = expr.match(pattern);

let resultString = '';
for (let item of arr) {
  let charCode = '';
  for (i = 0; i < item.length; i += 2) {
    if (item[i] === '*') {
      charCode += ' ';
      break;
    } else if (item[i] === '1' && item[i + 1] === '1') {
      charCode += '-';
    } else if (item[i] === '1' && item[i + 1] === '0') {
        charCode += '.';
    } else continue; 
  }
  if (charCode === ' ') {
      resultString += ' ';
  } else {
      resultString += MORSE_TABLE[charCode];
  }

}return resultString;
}


module.exports = {
  decode
};