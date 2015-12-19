angular
.module('app')
.factory('search', function(){
  var obj = {
              'Ben': {'friends':['Joe'], 'acitivities':{'Studying': 'Fri Dec 18 2015 20:45:59 GMT-0800 (PST)', 'Dancing':'Tue Dec 15 2015 20:45:59 GMT-0800 (PST)'}},
              'Joe': {'friends':['Ben','Mary'], 'acitivities':{'Hiking': 'Fri Dec 18 2015 18:45:59 GMT-0800 (PST)', 'Skiing':'Mon Dec 14 2015 20:40:59 GMT-0800 (PST)'}},
              'Mary': {'friends':['Joe'], 'acitivities':{'Swimming':'Thu Dec 17 2015 20:45:59 GMT-0800 (PST)', 'rafting':'Wed Dec 16 2015 20:45:59 GMT-0800 (PST)'}}
            };
  var getName = function(name) {
      return (name in obj);
  }
  var addActivity = function(name, act) {
     obj[name]['acitivities'][act] = Date();
      this.getActivity(name);
  }
  var getFriends = function(name) {
    return obj[name]['friends'];
  }  
  var getActivity = function(name) {
    var result = [],
        friend;
        for (var i=0; i<obj[name]['friends'].length; i++){
          friend = obj[name]['friends'][i];
            for (var activity in obj[friend]['acitivities']){
              result.push([friend, activity, obj[friend]['acitivities'][activity]])
            }
        }
        for (var activity in obj[name]['acitivities']){
          result.push([name, activity, obj[name]['acitivities'][activity]])
        }
        var tmp;
        var cov = function(time){
          var Month = {Jan:'01', Feb:'02', Mar:'03', Apr:'04', May:'05', Jun:'06', Jul:'07', Aug:'08', Sep:'09', Oct:'10', Nov: '11', Dec:'12'}
          return time.slice(11,15)+Month[time.slice(4,7)]+time.slice(8,10)+time.slice(16,24);
        }
        for (var j = result.length-1; j >= 0; j--) {
          for (var k = j-1; k >= 0; k--){
            if (cov(result[j][2]) > cov(result[k][2])){
              tmp = result[j];
              result[j] = result[k];
              result[k] = tmp;
            }
          }
        }
    return result;
  }
  return {
            addActivity: addActivity,
            getName: getName,
            getFriends: getFriends,
            getActivity: getActivity
         };

});