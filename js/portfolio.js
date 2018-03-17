$(document).ready(function(){

  //all projects
     var allImageArray = ["images/walt-disney.jpg","images/randomquote1.jpg","images/weather.jpg","images/wikipediaviewer.jpg","images/twitchStreamers1.jpg","images/javascriptcalculator1.jpg","images/pomodoroclock.jpg","images/tictactoe1.jpg","images/simon.jpg"];
     var allProjects=["Tribute Page","Random Quote Machine","Local Weather App","Wikipedia Viewer" ,"Twitchtv Streamers","JavaScript Calculator","Pomodoro Clock","Tic Tac Toe Game","Simon Game"];
     var allProjectLinks = ["https://codepen.io/davesoft/full/BKMNLB/","https://codepen.io/davesoft/full/LZEgOM/","https://codepen.io/davesoft/full/bedLyw/","https://codepen.io/davesoft/full/PzPbaM/" ,"https://codepen.io/davesoft/full/rLxezM/","https://codepen.io/davesoft/full/LxrEGj/","https://codepen.io/davesoft/full/QdVMEV/","https://codepen.io/davesoft/full/Rpbbxq/","https://codepen.io/davesoft/full/mmYoXJ/"];
     var allPortfoliomodalTitle = ["A tribute page designed with basic HTML, CSS and bootstrap",
     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."];
  //all projects div
  for(var i = allImageArray.length-1;i>=0;i--){
  	 var allPortfolioModal = '<div class="portfolio-modal modal fade slideanim" id="portfolioModal'+i+'" tabindex="-1" role="dialog" aria-hidden="true"><div class="modal-content port-modal"><div class="close-modal" data-dismiss="modal"><div class="lr"><div class="rl"></div></div></div><div class="container"><div class="row"><div class="col-lg-8 col-lg-offset-2 text-center"><div class="modal-body"><h3>'+allProjects[i]+'</h3><img src="'+allImageArray[i]+'" class="img-responsive img-centered" alt=""><p>'+allPortfoliomodalTitle[i]+'</p></div></div></div></div></div></div>';
     var allDiv = '<div class="box allProjects" id ="mybox"><a href="#portfolioModal'+i+'" class="portfolio-link b-link-diagonal b-animate-go" data-toggle="modal"><img class="img-responsive projectImage" src="'+allImageArray[i]+'" alt=""/></a><a href="'+allProjectLinks[i]+'" target="blank" class="read hvr-shutter-in-horizontal" id="projectTitle">'+allProjects[i]+'</a></div>';
     
    $(".portfolioDiv").append(allPortfolioModal);
    $(".projects").append(allDiv);
    }


    //Javascript projects
     var javascriptImageArray = ["images/walt-disney.jpg","images/randomquote1.jpg","images/weather.jpg","images/wikipediaviewer.jpg","images/twitchStreamers1.jpg","images/javascriptcalculator1.jpg","images/pomodoroclock.jpg","images/tictactoe1.jpg","images/simon.jpg"];
     var javascriotprojects=["Tribute Page","Random Quote Machine","Local Weather App","Wikipedia Viewer" ,"Twitchtv Streamers","JavaScript Calculator","Pomodoro Clock","Tic Tac Toe Game","Simon Game"];
     var javascriptProjectLinks = ["https://codepen.io/davesoft/full/BKMNLB/","https://codepen.io/davesoft/full/LZEgOM/","https://codepen.io/davesoft/full/bedLyw/","https://codepen.io/davesoft/full/PzPbaM/" ,"https://codepen.io/davesoft/full/rLxezM/","https://codepen.io/davesoft/full/LxrEGj/","https://codepen.io/davesoft/full/QdVMEV/","https://codepen.io/davesoft/full/Rpbbxq/","https://codepen.io/davesoft/full/mmYoXJ/"];
     var javascriptPortfoliomodalTitle = ["Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."];
  //all projects div
  for(var i = javascriptImageArray.length-1;i>=0;i--){
  	 var javascriptPortfolioModal = '<div class="portfolio-modal modal fade slideanim" id="portfolioModal'+i+'" tabindex="-1" role="dialog" aria-hidden="true"><div class="modal-content port-modal"><div class="close-modal" data-dismiss="modal"><div class="lr"><div class="rl"></div></div></div><div class="container"><div class="row"><div class="col-lg-8 col-lg-offset-2 text-center"><div class="modal-body"><h3>'+javascriotprojects[i]+'</h3><img src="'+javascriptImageArray[i]+'" class="img-responsive img-centered" alt=""><p>'+javascriptPortfoliomodalTitle[i]+'</p></div></div></div></div></div></div>';
     var allDiv = '<div class="box javascriotprojects" id ="mybox"><a href="#portfolioModal'+i+'" class="portfolio-link b-link-diagonal b-animate-go" data-toggle="modal"><img class="img-responsive projectImage" src="'+javascriptImageArray[i]+'" alt=""/></a><a href="'+javascriptProjectLinks[i]+'" target="blank" class="read hvr-shutter-in-horizontal" id="projectTitle">'+javascriotprojects[i]+'</a></div>';
     

    $(".portfolioDiv").append(javascriptPortfolioModal);
    $(".javascriptprojects").append(allDiv);
    }
						
});