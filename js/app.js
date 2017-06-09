(function (){


  var targetPerson4Name = document.getElementById("person4Name");
  var targetPerson4HomeWorld = document.getElementById("person4HomeWorld");

  function reqListener1(){

    var response = JSON.parse(this.responseText);

    var vaderName = document.createElement("div");
    vaderName.innerHTML = response.name;
    targetPerson4Name.appendChild(vaderName);

  }

  function reqListener2(){

    var response = JSON.parse(this.responseText);

    var vaderHomeWorld = document.createElement("div");
    vaderHomeWorld.innerHTML = response.name;
    targetPerson4HomeWorld.appendChild(vaderHomeWorld);
    console.log(response);

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

  getPerson(4);
  getPlanet(1);











})();