(function (){


  var targetPerson4 = document.getElementById("person4Name");

  function reqListener(){

    var response = JSON.parse(this.responseText);

    var personBox = document.createElement("div");
    personBox.innerHTML = response.name;
    targetPerson4.appendChild(personBox);

  }

  function getPerson(id){
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", "http://www.swapi.co/api/people/" + id);
    oReq.send();
  }

  getPerson(4);











})();