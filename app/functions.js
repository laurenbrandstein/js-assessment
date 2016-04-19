exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
      return fn.apply(this, arr);
  },

  speak : function(fn, obj) {
      return fn.call(obj);
  },

  functionFunction : function(str) {
      var str1 = str;
      return function(str) {
          return str1 + ', ' + str;
      };
  },

  makeClosures : function(arr, fn) {
      var funcs = [],
          i;

      function makeClosure(arg, fn) {
          return function() {
              return fn(arg);
          };
      }

      for(i = 0; i < arr.length; i++) {
          funcs[i] = makeClosure(arr[i], fn);
      }

      return funcs;
  },

  partial : function(fn, str1, str2) {
      return function(str3) {
          return fn(str1, str2, str3);
      };
  },

  useArguments : function() {
      var args = Array.from(arguments),
          result = 0;

      args.forEach(function(val, i) {
          result += val;
      });

      return result;
  },

  callIt : function(fn) {
      var args = Array.from(arguments);

      // Save the required first arg, the function to apply (returned
      // from shift()), and retain any optional args that may have
      // been passed in inside 'args' array, to pass to func
      var func = args.shift();

      return func.apply(this, args);
  },

  partialUsingArguments : function(fn) {
      var originalArgs = Array.from(arguments);

      // Remove the required first arg, the function to
      // apply, and keep any optional args that may have
      // been passed in, to pass on to the inner function
      originalArgs.shift();

      return function() {
          // Concat a new array from any original arguments
          // that may have been optionally passed on the first
          // call, plus any new ones optionally passed now 
          var newArgs = Array.from(arguments),
              allArgs = originalArgs.concat(newArgs);
          return fn.apply(this, allArgs);
      };
  },

  curryIt : function(fn) {
      return function(arg) {
          if(args.length === fn.length) {
              return fn.apply(this, args);
          }
      };

      return function(arg) {
          // Concat a new array from any original arguments
          // that may have been optionally passed on the first
          // call, plus any new ones optionally passed now 
          var newArgs = Array.from(arguments),
              allArgs = originalArgs.concat(newArgs);

          if(args.length === fn.length) {
              return fn.apply(this, args);
          }
          else {
              return function(arg) {
                  args.push(arg);
              };
          }
      };

      // var argToPass;
      //
      // if(typeof arguments[0] !== 'function') {
      //     argToPass = arguments[0];
      // }
      // return function(arg) {
      //     if(args.length === fn.length) {
      //         return fn.apply(this, args);
      //     }
      //     else {
      //         return function(arg) {
      //             var args
      //         }
      //     }
      // };
      //
      // return function() {
      //     var args = args.push(arg) || arg;
      //     return function(arg) {
      //         if(args.length === fn.length) {
      //             return fn.apply(this, args);
      //         }
      //     };
      // };
  }
};
