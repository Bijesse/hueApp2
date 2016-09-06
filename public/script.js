$(document).ready(function(){
console.log("works");
    var hueURL = "http://192.168.1.2/api/OGIOGrBPRyn1AutXp3tLkZFIbMETdMaUCIBBkCL7";
  //  $.get(request, function(response){
  //     console.log(response.lights[1].state.on);
  //   });
   //
  //  });


  //  data: JSON.stringify(yourObj)
  //  contentType: 'application/json',
$.ajax(
  {
  url: hueURL,
  type: "GET",
  success: function (response){
    $('#oneS').append('on: ' + response.lights[1].state.on + ' brightness: ' + response.lights[1].state.bri + ' hue: ' + response.lights[1].state.hue);
    $('#twoS').append('on: ' + response.lights[2].state.on + ' brightness: ' + response.lights[2].state.bri + ' hue: ' + response.lights[2].state.hue);
    $('#threeS').append('on: ' + response.lights[4].state.on + ' brightness: ' + response.lights[4].state.bri + ' hue: ' + response.lights[4].state.hue);

    $('#slider1').attr('value', response.lights[1].state.bri);

  },
    error: function (response) {
      console.log(response);
    }
  });

$('.on').click(function(){
  $.ajax(
   {
    url: hueURL + "/lights/"+this.className[0]+"/state",
    type: 'PUT',
    data: JSON.stringify({"on":true}),
    dataType: 'json',
    contentType: 'application/json',
    success: function(data) {
     console.log(data);
    },
    error: function (response) {
      console.log(response);
    }

    });
  });

  $('.green').click(function(){
    $.ajax(
     {
      url: hueURL + "/lights/"+this.className[0]+"/state",
      type: 'PUT',
      data: JSON.stringify({"hue":25653}),
      dataType: 'json',
      contentType: 'application/json',
      success: function(data) {
       console.log(data);
      },
      error: function (response) {
        console.log(response);
      }

      });
      $.ajax(
       {
        url: hueURL + "/lights/"+this.className[0]+"/state",
        type: 'PUT',
        data: JSON.stringify({"on":true}),
        dataType: 'json',
        contentType: 'application/json',
        success: function(data) {
         console.log(data);
        },
        error: function (response) {
          console.log(response);
        }

        });
    });

    //function that will turn light on or off depending on its current state
    function onOff(){
     $.get(hueURL, function(response){
        if(response.lights[1].state.on === true){
          return JSON.stringify({"on":false});
        }else{
          return JSON.stringify({"on":true});
        }
      });

     }

});
