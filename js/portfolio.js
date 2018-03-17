$(document).ready(function(){

  //all projects
   var counter = 0;
      var allImageArray = ["images/walt-disney.jpg","images/randomquote1.jpg","images/weather.jpg","images/wikipediaviewer.jpg","images/twitchStreamers1.jpg","images/javascriptcalculator1.jpg","images/pomodoroclock.jpg","images/tictactoe1.jpg","images/simon.jpg"];
     var allProjects=["Tribute Page","Random Quote Machine","Local Weather App","Wikipedia Viewer" ,"Twitchtv Streamers","JavaScript Calculator","Pomodoro Clock","Tic Tac Toe Game","Simon Game"];
     var allProjectLinks = ["https://codepen.io/davesoft/full/BKMNLB/","https://codepen.io/davesoft/full/LZEgOM/","https://codepen.io/davesoft/full/bedLyw/","https://codepen.io/davesoft/full/PzPbaM/" ,"https://codepen.io/davesoft/full/rLxezM/","https://codepen.io/davesoft/full/LxrEGj/","https://codepen.io/davesoft/full/QdVMEV/","https://codepen.io/davesoft/full/Rpbbxq/","https://codepen.io/davesoft/full/mmYoXJ/"];
     var allPortfoliomodalbody = ["A tribute page designed with basic HTML, CSS and bootstrap",
     "A simple JavaScript web app that generate random quotes on button click. built with Jquery",
     "A Local weather app that displays the current location weather, built using open weather Api with Jquery with Ajax.",
     "A web app built on Jquery with wiki api and Ajax, this app enables you to make a direct search on wikipedia directly from the app.",
     "A web app used to display Twitchtv users, showing online and offline users, built on Jquery with the aim of achieving working with APIs in Jquery.",
     "A basic Javascript calculator, to handle basic mathematical operations, this project was developed to demonstrate the power of html, css and javascript in Design. and how much javascript can be used to make web interface dynamic.",
     "A Pomodoro click Build on javascript which can be used comfortably to keep track of time while working, the design and functionality was all achieved using HTML, CSS BOOTSRAP and JQuery.",
     "A tic tac toe game built to demonstrate how much you can take control of the web browser with javascript, with this game you stand the chance to compete with the system and the logic has been carefully crafted to make it reall between you and the system as the players.",
     "Simon game was also build on Jquery, it is a very good mind game to keep the mind sharp as you play with sound and colors."
     ];
  //all projects div
  var allPortfolioModal = [];
  for(var i = allImageArray.length-1;i>=0;i--){
  	 allPortfolioModal.push('<div class="portfolio-modal modal fade slideanim" id="portfolioModal'+i+'" tabindex="-1" role="dialog" aria-hidden="true"><div class="modal-content port-modal"><div class="close-modal" data-dismiss="modal"><div class="lr"><div class="rl"></div></div></div><div class="container"><div class="row"><div class="col-lg-8 col-lg-offset-2 text-center"><div class="modal-body"><h3>'+allProjects[i]+'</h3><img src="'+allImageArray[i]+'" class="img-responsive img-centered" alt=""><p>'+allPortfoliomodalbody[i]+'</p></div></div></div></div></div></div>');     var allDiv = '<div class="box allProjects" id ="mybox"><a href="#portfolioModal'+i+'" class="portfolio-link b-link-diagonal b-animate-go" data-toggle="modal"><img class="img-responsive projectImage" src="'+allImageArray[i]+'" alt=""/></a><a href="'+allProjectLinks[i]+'" target="blank" class="read hvr-shutter-in-horizontal" id="projectTitle">'+allProjects[i]+'</a></div>';     
    $(".projects").append(allDiv);
    }
      $(".portfolioDiv").append(allPortfolioModal);
    $("#alltab").click(function(){
    	if(counter>0){
      //re-initialize all projects modals if others have been previously loaded		
      $(".portfolioDiv").html("");
      $(".portfolioDiv").append(allPortfolioModal);
    	}
    });
    //Javascript projects

     var javascriptImageArray = ["images/walt-disney.jpg","images/randomquote1.jpg","images/weather.jpg","images/wikipediaviewer.jpg","images/twitchStreamers1.jpg","images/javascriptcalculator1.jpg","images/pomodoroclock.jpg","images/tictactoe1.jpg","images/simon.jpg"];
     var javascriotprojects=["Tribute Page","Random Quote Machine","Local Weather App","Wikipedia Viewer" ,"Twitchtv Streamers","JavaScript Calculator","Pomodoro Clock","Tic Tac Toe Game","Simon Game"];
     var javascriptProjectLinks = ["https://codepen.io/davesoft/full/BKMNLB/","https://codepen.io/davesoft/full/LZEgOM/","https://codepen.io/davesoft/full/bedLyw/","https://codepen.io/davesoft/full/PzPbaM/" ,"https://codepen.io/davesoft/full/rLxezM/","https://codepen.io/davesoft/full/LxrEGj/","https://codepen.io/davesoft/full/QdVMEV/","https://codepen.io/davesoft/full/Rpbbxq/","https://codepen.io/davesoft/full/mmYoXJ/"];
     var javascriptPortfoliomodalbody = ["A tribute page designed with basic HTML, CSS and bootstrap",
     "A simple JavaScript web app that generate random quotes on button click. built with Jquery",
     "A Local weather app that displays the current location weather, built using open weather Api with Jquery with Ajax.",
     "A web app built on Jquery with wiki api and Ajax, this app enables you to make a direct search on wikipedia directly from the app.",
     "A web app used to display Twitchtv users, showing online and offline users, built on Jquery with the aim of achieving working with APIs in Jquery.",
     "A basic Javascript calculator, to handle basic mathematical operations, this project was developed to demonstrate the power of html, css and javascript in Design. and how much javascript can be used to make web interface dynamic.",
     "A Pomodoro click Build on javascript which can be used comfortably to keep track of time while working, the design and functionality was all achieved using HTML, CSS BOOTSRAP and JQuery.",
     "A tic tac toe game built to demonstrate how much you can take control of the web browser with javascript, with this game you stand the chance to compete with the system and the logic has been carefully crafted to make it reall between you and the system as the players.",
     "Simon game was also build on Jquery, it is a very good mind game to keep the mind sharp as you play with sound and colors."
     ];

     //javascript projects div
  var javascriptPortfolioModal = [];
  for(var i = javascriptImageArray.length-1;i>=0;i--){
  	 javascriptPortfolioModal.push('<div class="portfolio-modal modal fade slideanim" id="portfolioModal'+i+'" tabindex="-1" role="dialog" aria-hidden="true"><div class="modal-content port-modal"><div class="close-modal" data-dismiss="modal"><div class="lr"><div class="rl"></div></div></div><div class="container"><div class="row"><div class="col-lg-8 col-lg-offset-2 text-center"><div class="modal-body"><h3>'+javascriotprojects[i]+'</h3><img src="'+javascriptImageArray[i]+'" class="img-responsive img-centered" alt=""><p>'+javascriptPortfoliomodalbody[i]+'</p></div></div></div></div></div></div>');
     var javascriptDiv = '<div class="box allProjects" id ="mybox"><a href="#portfolioModal'+i+'" class="portfolio-link b-link-diagonal b-animate-go" data-toggle="modal"><img class="img-responsive projectImage" src="'+javascriptImageArray[i]+'" alt=""/></a><a href="'+javascriptProjectLinks[i]+'" target="blank" class="read hvr-shutter-in-horizontal" id="projectTitle">'+javascriotprojects[i]+'</a></div>';
     
        $(".javascriptprojects").append(javascriptDiv);
    	
      }
       $("#javascripttab").click(function(){
     	counter++;
        $(".portfolioDiv").html("");
        $(".portfolioDiv").append(javascriptPortfolioModal);
    });
						
});