/* 
  Acronyms
  Create a function that, given a string, returns the string’s acronym 
  (first letter of each word capitalized). 
  Do it with .split first if you need to, then try to do it without
*/

const str1 = " there's no free lunch - gotta pay yer way. ";
const expected1 = "TNFL-GPYW";

const str2 = "Live from New York, it's Saturday Night!";
const expected2 = "LFNYISN";

/**
 * Turns the given str into an acronym.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str A string to be turned into an acronym.
 * @returns {string} The given str converted into an acronym.
 * 
 * EDGE CASE:
 * if the string doesn't start with a space
 * 
 * pseudo code
 * - create a function that takes in a string
 * - make a var to hold the returnString
 * - IF: first char in given string is not a space
 *      - THEN: add first char to returnString var
 * - iterterate over the given string starting at the beginning
 *      - IF char is a space 
 *          - THEN: add next char to returnString var
 * - make returnString var all cap letters
 * - return the returnString var
 */
function acronymize(str) {}

// ********************************************************

/* 
  String: Reverse
  Given a string,
  return a new string that is the given string reversed
*/

const two_str1 = "creature";
const two_expected1 = "erutaerc";

const two_str2 = "dog";
const two_expected2 = "god";

/**
 * Reverses the given str.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str String to be reversed.
 * @returns {string} The given str reversed.
 */
function reverseString(str) {}

//SOLUTIOOOON (no solution)