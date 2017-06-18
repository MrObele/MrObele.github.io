
$(document).ready(function(){

  //all projects
     var allImageArray = ["images/walt-disney.jpg","images/randomquote1.jpg","images/Weather.jpg","images/wikipediaviewer.jpg","images/twitchStreamers1.jpg","images/javascriptcalculator1.jpg","images/pomodoroclock1.jpg","images/tictactoe1.jpg","images/simon.jpg"];
     var allProjects=["Tribute Page","Random Quote Machine","Local Weather App","Wikipedia Viewer" ,"Twitchtv Streamers","JavaScript Calculator","Pomodoro Clock","Tic Tac Toe Game","Simon Game"];
  var allProjectLinks = ["https://codepen.io/davesoft/full/BKMNLB/","https://codepen.io/davesoft/full/LZEgOM/","https://codepen.io/davesoft/full/bedLyw/","https://codepen.io/davesoft/full/PzPbaM/" ,"https://codepen.io/davesoft/full/rLxezM/","https://codepen.io/davesoft/full/LxrEGj/","https://codepen.io/davesoft/full/QdVMEV/","https://codepen.io/davesoft/full/Rpbbxq/","https://codepen.io/davesoft/full/mmYoXJ/"];
  //all projects div
  for(var i = allImageArray.length-1;i>=0;i--){
     var allDiv = '<div class="box allProjects" id ="mybox"><img class="img-responsive projectImage" src="'+allImageArray[i]+'"/><a href="'+allProjectLinks[i]+'" target="blank"><h3>'+allProjects[i]+'</h3></a></div>';
    $(".projects").append(allDiv); 
    }

});

