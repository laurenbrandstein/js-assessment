exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async : function(value) {
      return new Promise(function(resolve, reject) {
          resolve(value);
      });
  },

  manipulateRemoteData : function(url) {
      var $deferred = $.getJSON(url, function(data) {
          var people = [];
          data.people.forEach(function(element, i) {
              people.push(element.name);
          });
          return people.sort();
      });

      return $deferred;
  }
};
