exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
      var i,
          result = -1;

      for(i = 0; i < arr.length; i++) {
          if(arr[i] === item) {
              result = i;
              break;
          }
      }

      return result;
  },

  sum : function(arr) {
      var i,
          sum = 0;

      for(i = 0; i < arr.length; i++) {
          sum += arr[i];
      }

      return sum;
  },

  remove : function(arr, item) {
      var i;

      for(i = 0; i < arr.length; i++) {
          if(arr[i] === item) {
              arr.splice(i, 1);
          }
      }

      return arr;
  },

  removeWithoutCopy : function(arr, item) {

  },

  append : function(arr, item) {

  },

  truncate : function(arr) {

  },

  prepend : function(arr, item) {

  },

  curtail : function(arr) {

  },

  concat : function(arr1, arr2) {

  },

  insert : function(arr, item, index) {

  },

  count : function(arr, item) {

  },

  duplicates : function(arr) {

  },

  square : function(arr) {

  },

  findAllOccurrences : function(arr, target) {

  }
};
