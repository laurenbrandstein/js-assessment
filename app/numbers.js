exports = (typeof window === 'undefined') ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
      var bitValue = num;

      // Convert decimal number to binary
      bitValue = bitValue.toString(2);

      // Reverse the binary string, since bit order
      // is right-to-left, with bit 1 on the right
      // and bit 8 on the left, and JavaScript indices
      // read left-to-right
      bitValue = bitValue.split('').reverse().join('');

      // Look at the nth-minus-1 indexed bit, since
      // JavaScript is zero-indexed and bits are
      // numbered 1-8, not 0-7!
      bitValue = bitValue.charAt(bit - 1);

      // Convert bit value string to number, since
      // test expects a number
      bitValue = Number(bitValue);
      
      return bitValue;
  },

  base10: function(str) {
      return parseInt(str, 2);
  },

  convertToBinary: function(num) {
      // Ensure that the number always fits in a byte
      // (8 bits including leading zeroes)      
      return ('0000000' + num.toString(2)).substr(-8);
  },

  multiply: function(a, b) {
      // return Number((a * b).toPrecision(5));
      return ((a * 1000) * (b * 1000)) / 1000000;
  }
};
