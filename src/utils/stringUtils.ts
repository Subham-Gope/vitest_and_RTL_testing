export const reverseString = (str: string): string => {
  const length = str.length;
  let reversedString = "";

  for (let i = 0; i < length; i++) {
    reversedString = str[i] + reversedString;
  }
  return reversedString;
};

export const capitalizeWords = (str: string): string => {
  return str.toUpperCase();
};

export const isPalindrome = (str: string): boolean => {
  const strRefined = str
    .replace(/[\s,."';:/@#$%!&^*()\-_+=\}]+/g, "")
    .toLowerCase();

  let left = 0;
  let right = strRefined.length - 1;

  while (right > left) {
    if (strRefined[left] !== strRefined[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

export const countVowels = (str: string): number => {
  const matches = str.match(/[aeiou]/gi);

  return matches ? matches.length : 0;
};

export const turnicate = (str: string, maxLength: number): string => {
  return `${str.substring(0, maxLength)}...`;
};

console.log(turnicate("Hi there, how are you", 7));
