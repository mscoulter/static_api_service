$(document).ready(function(){
  console.log("working");
  var request = $.get("http://localhost:3000/users", function(data){
    console.log(data);
    for (var i = 0; i < data.length; i++) {
      $('#names').append(data[i].user_data.first_name + " " + data[i].user_data.last_name + '<br>')
    }
  })
})
