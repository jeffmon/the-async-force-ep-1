(function (){

  var targetPerson4Name = document.getElementById("person4Name");
  var targetPerson4HomeWorld = document.getElementById("person4HomeWorld");
  var targetPerson14Name = document.getElementById("person14Name");
  var targetPerson14Species = document.getElementById("person14Species");

  function reqListener1(){
    var response = JSON.parse(this.responseText);
    if(response.name === "Darth Vader"){
      var vaderName = document.createElement("div");
      vaderName.innerHTML = response.name;
      targetPerson4Name.appendChild(vaderName);
    } else if(response.name === "Han Solo"){
      var soloName = document.createElement("div");
      soloName.innerHTML = response.name;
      targetPerson14Name.appendChild(soloName);
    }
  }

  function reqListener2(){
    var response = JSON.parse(this.responseText);
    var vaderHomeWorld = document.createElement("div");
    vaderHomeWorld.innerHTML = response.name;
    targetPerson4HomeWorld.appendChild(vaderHomeWorld);
  }

  function reqListener3(){
    var response = JSON.parse(this.responseText);
    var soloSpecies =document.createElement("div");
    soloSpecies.innerHTML = response.name;
    targetPerson14Species.appendChild(soloSpecies);
  }

  function getPerson(id){
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener1);
    oReq.open("GET", "http://www.swapi.co/api/people/" + id);
    oReq.send();
  }

  function getPlanet(id){
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener2);
    oReq.open("GET", "http://www.swapi.co/api/planets/" + id);
    oReq.send();
  }

  function getSpecies(id){
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener3);
    oReq.open("GET", "http://www.swapi.co/api/species/" + id);
    oReq.send();
  }

  getPerson(4);
  getPlanet(1);
  getPerson(14);
  getSpecies(1);

  var targetFilmList = document.getElementById("filmList");

  function getFilms(){
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener4);
    oReq.open("GET", "http://swapi.co/api/films/");
    oReq.send();
  }

  function reqListener4(){
    var response = JSON.parse(this.responseText);

    for(var i = 0, len = response.results.length; i < len; i++){
      var filmContainer = document.createElement("li");
      filmContainer.className = "film";
      targetFilmList.appendChild(filmContainer);
      var filmTitle = document.createElement("h2");
      filmTitle.innerHTML = response.results[i].title;
      filmContainer.appendChild(filmTitle);
      var planetHeading = document.createElement("h3");
      filmContainer.appendChild(planetHeading);

      var filmPlanetsContainer = document.createElement("ul");
      filmPlanetsContainer.className = "filmPlanets";
      filmContainer.appendChild(filmPlanetsContainer);

      for(var p = 0; p < response.results[i].planets.length; p++){


        (function(myPlanets){
         var pReq = new XMLHttpRequest();
         pReq.addEventListener("load", function(){
            var pRes = JSON.parse(this.responseText);

            var planetListItemContainer = document.createElement("li");
           planetListItemContainer.className = "planet";

           var planetTitleHeading = document.createElement("h4");
           planetTitleHeading.className = "planetName";
           planetTitleHeading.innerHTML = pRes.name;

           planetListItemContainer.appendChild(planetTitleHeading);
           myPlanets.appendChild(planetListItemContainer);
          });
          pReq.open("GET", response.results[i].planets[p]);
          pReq.send();
       })(filmPlanetsContainer);

      }//for loop p


    }//for loop i

  }

  getFilms();











})();

