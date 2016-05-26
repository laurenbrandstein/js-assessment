exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async : function(value) {
      return new Promise(function(resolve, reject) {
          resolve(value);
      });
  },

  manipulateRemoteData : function(url) {

       var promise = new Promise(function(resolve, reject) {
           var people = [];

           $.getJSON(url, function(data) {
               data.people.forEach(function(element, i) {
                   people.push(element.name);
               });

               people = people.sort();

               resolve(people);
           });
       });

       return promise;
  }
};
