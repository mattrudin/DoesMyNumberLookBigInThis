/* A Narcissistic Number is a number which is the sum of its own digits, 
each raised to the power of the number of digits.

For example, take 153 (3 digits):

    1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
and 1634 (4 digits):

    1^4 + 6^4 + 3^4 + 4^4 = 1 + 1296 + 81 + 256 = 1634
The Challenge:

Your code must return true or false depending upon whether the given number 
is a Narcissistic number.

Error checking for text strings or other invalid inputs is not required, 
only valid integers will be passed into the function. */


//Submitted approach
function narcissistic( value ) {
  const arr = value.toString().split("");
  const arrLength = arr.length;
  const exponent = (x) => {return Math.pow(x,arrLength);};
  const sum = (acc, val) => {return acc + val;};

  const result = arr.map(exponent).reduce(sum); 
	if (result === value) {
	  return true;
	  } else {
	  return false;
	  };
}


//Approach with new exponential operator and ternary operator (Codewars does not accept this solution)
function narcissistic( value ) {
  const arr = value.toString().split("");
  const arrLength = arr.length;
  const exponent = (x) => {return x**arrLength;};
  const sum = (acc, val) => {return acc + val;};

  const result = arr.map(exponent).reduce(sum); 
  result === value ? true : false;
}


//Tests
narcissistic(153); //true
narcissistic(1539); //false
narcissistic(370); //true
narcissistic(1); //true