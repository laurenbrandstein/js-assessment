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

  },

  fibonacci: function(n) {

  },

  validParentheses: function(n) {

  }
};
