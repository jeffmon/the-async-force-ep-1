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
    if(response.name === "Tatooine"){
      var vaderHomeWorld = document.createElement("div");
      vaderHomeWorld.innerHTML = response.name;
      targetPerson4HomeWorld.appendChild(vaderHomeWorld);
    }
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











})();