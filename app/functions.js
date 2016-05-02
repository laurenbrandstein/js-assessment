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
      var args = Array.from(arguments);
      // Remove the function, leave the args
      args.shift();

      return function func() {
          args = args.concat(Array.from(arguments));

          if(args.length === fn.length) {
              return fn.apply(null, args);
          }
          else {
              return func;
          }
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
      var args = [];

      return function curry(arg) {
          args.push(arg);

          if(args.length === fn.length) {
              return fn.apply(null, args);
          }
          else {
              return curry;
          }
      };
  }
};
