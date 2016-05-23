exports = (typeof window === 'undefined') ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
      var directoryToList,
          fileNames = [],
          findFolder,
          getFiles,
          i;

      findFolder = function(directory, dirName) {
          var i;

          for(i = 0; i < directory.files.length; i++) {
              if(directory.dir === dirName) {
                  directoryToList = directory;
                  break;
              }
              else if(typeof directory.files[i] === 'object') {
                  findFolder(directory.files[i], dirName);
              }
          }
      };

      getFiles = function(directory) {
          var i;

          for(i = 0; i < directory.files.length; i++) {
              if(typeof directory.files[i] === 'string') {
                  fileNames.push(directory.files[i]);
              }
              else if(typeof directory.files[i] === 'object') {
                  getFiles(directory.files[i]);
              }
          }
      };

      if(dirName !== undefined) {
          findFolder(data, dirName);
      }
      else {
          directoryToList = data;
      }

      getFiles(directoryToList);

      return fileNames;
  },

  permute: function(arr) {
      var i,
          mutate,
          permutations = [],
          j;

      permutations.push(arr);

      mutate = function(arr) {
          var mutant = arr.slice();

          mutant[i] = arr[j];
          mutant[j] = arr[i];

          return mutant;
      };

      for(i = (arr.length - 1); i > 0; i--) {
          for(j = (arr.length - 2); j > -1; j--) {
              permutations.push(mutate(arr));
          }
      }

      return permutations;
  },

  fibonacci: function(n) {

  },

  validParentheses: function(n) {

  }
};
