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
      var i;

      for(i = 0; i < arr.length; i++) {
          if(arr[i] === item) {
              arr.splice(i, 1);
              i -= 1;
          }
      }

      return arr;
  },

  append : function(arr, item) {
      arr.push(item);
      
      return arr;
  },

  truncate : function(arr) {
      arr.pop();
      
      return arr;
  },

  prepend : function(arr, item) {
      arr.splice(0, 0, item);
      
      return arr;
  },

  curtail : function(arr) {
      arr.shift();
      
      return arr;
  },

  concat : function(arr1, arr2) {
      return arr1.concat(arr2);
  },

  insert : function(arr, item, index) {
      arr.splice(index, 0, item);
      
      return arr;
  },

  count : function(arr, item) {
      var count = 0,
          i;

      for(i = 0; i < arr.length; i++) {
          if(arr[i] === item) {
              count += 1;
          }
      }

      return count;
  },

  duplicates : function(arr) {
      var arrDuplicates = [],
          i;

      arr.sort();

      for(i = 0; i < arr.length; i++) {
          if(arr[i] === arr[i - 1]) {
              if(arrDuplicates[arrDuplicates.length - 1] !== arr[i]) {
                  arrDuplicates.push(arr[i]);
              }
          }
      }

      return arrDuplicates;
  },

  square : function(arr) {
      var i;

      for(i = 0; i < arr.length; i++) {
          arr[i] = arr[i] * arr[i];
      }

      return arr;
  },

  findAllOccurrences : function(arr, target) {
      var i,
          results = [];

      for(i = 0; i < arr.length; i++) {
          if(arr[i] === target) {
              results.push(i);
          }
      }

      return results;
  }
};
