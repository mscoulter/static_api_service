var getActive = function(users){
  var arr = []
  for (var i = 0; i < users.length; i++) {
    if(users[i].user_data.active){
      arr.push(users[i])
    }
  }
  return arr
}

module.exports = getActive
