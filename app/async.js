exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async : function(value) {
      return new Promise(function(resolve, reject) {
          resolve(value);
      });
  },

  manipulateRemoteData : function(url) {
      var people;
      $.getJSON(url, function(data) {
           people = data.people.sort();
      });
      console.log(people);
      return new Promise(function(resolve, reject) {
          resolve(people);
      });
  }
};
