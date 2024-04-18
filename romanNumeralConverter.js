var romans = {
  1: "I",
  2: "II",
  3: "III",
  4: "IV",
  5: "V",
  6: "VI",
  7: "VII",
  8: "VIII",
  9: "IX",
  10: "X",
  20: "XX",
  30: "XXX",
  40: "XL",
  50: "L",
  60: "LX",
  70: "LXX",
  80: "LXXX",
  90: "XC",
  100: "C",
  200: "CC",
  300: "CCC",
  400: "CD",
  500: "D",
  600: "DC",
  700: "DCC",
  800: "DCCC",
  900: "CM",
  1000: "M",
  2000: "MM",
  3000: "MMM"
};

function convertToRoman(num) {
  let result = "";
  let digits = num.toString().split("");
  let multiplier = 1;

  for (let i = digits.length - 1; i >= 0; i--) {    
    let value = parseInt(digits[i]) * multiplier;
    if (romans[value]) {
      result = romans[value] + result;
    }

    multiplier *= 10;
  }

  return result;
}

console.log(convertToRoman(9));

/**
Convert the given number into a roman numeral.

Roman numerals	Arabic numerals
M	1000
CM	900
D	500
CD	400
C	100
XC	90
L	50
XL	40
X	10
IX	9
V	5
IV	4
I	1
All roman numerals answers should be provided in upper-case.

**/