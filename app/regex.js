exports = (typeof window === 'undefined') ? global : window;

exports.regexAnswers = {
  containsNumber : function(str) {
      var regex = /\d+/;

      return regex.test(str);
  },

  containsRepeatingLetter : function(str) {
      var regex = /([a-z])\1/i;

      return regex.test(str);
  },

  endsWithVowel : function(str) {
      var regex = /\w*[aeiou]$/i;

      return regex.test(str);
  },

  captureThreeNumbers : function(str) {
      var regex = /\d{3}/,
          result;

      if(regex.test(str)) {
          result = str.match(regex)[0];
      }
      else {
          result = false;
      }

      return result;
  },

  matchesPattern : function(str) {
      var regex = /^\d{3}-\d{3}-\d{4}$/;

      return regex.test(str);
  },

  isUSD : function(str) {
      var regex = /^\$\d{1,3}(,\d{3})*(\.\d{2})?$/;

      return regex.test(str);
  }
};
