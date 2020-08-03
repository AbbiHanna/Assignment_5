// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/

//

window.addEventListener("load", function () {

   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
      response.json().then(function (json) {
         const missionTarget = document.getElementById("missionTarget");

         let num = Math.floor(Math.random() * json.length)
         let div = `
           <h2>Mission Destination</h2>
            <ol>
               <li>Name: ${json[num].name}</li>
               <li>Diameter: ${json[num].diameter}</li>
               <li>Star: ${json[num].star}</li>
               <li>Distance from Earth: ${json[num].distance}</li>
               <li>Number of Moons: ${json[num].moons}</li>
            <ol>
            <img src="${json[num].image}">
         `
         missionTarget.innerHTML += div;
      })

   })

   let form = document.querySelector("form");
   let formSubmit = document.getElementById("formSubmit");
   let pilotName = document.querySelector("input[name=pilotName]");
   let copilotName = document.querySelector("input[name=copilotName]");
   let fuelLevel = document.querySelector("input[name=fuelLevel]");
   let cargoMass = document.querySelector("input[name=cargoMass]");
   let faultyItems = document.getElementById("faultyItems");
   let pilotStatus = document.getElementById("pilotStatus");
   let copilotStatus = document.getElementById("copilotStatus");
   let fuelStatus = document.getElementById("fuelStatus");
   let cargoStatus = document.getElementById("cargoStatus");
   let launchStatusCheck = document.getElementById("launchStatusCheck");
   let launchStatus = document.getElementById("launchStatus");

   form.addEventListener("submit", function (event) {

      if (pilotName.value == "" || copilotName.value == "" || fuelLevel.value == "" || cargoMass.value == "") {
         alert("All fields are required!");
         event.preventDefault();
      }

      if (isNaN(pilotName.value) == false) {
         alert("Pilot name can not be a number.");
         event.preventDefault();
      }

      if (isNaN(copilotName.value) == false) {
         alert("Copilot name can not be a number.");
         event.preventDefault();
      }

      if (isNaN(fuelLevel.value) == true) {
         alert("Fuel level must be a number.");
         event.preventDefault();
      }

      if (isNaN(cargoMass.value) == true) {
         alert("Cargo mass must be a number.");
         event.preventDefault();
      }

      if (fuelLevel.value < 10000) {
         pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch`;
         copilotStatus.innerHTML = `Co-Pilot ${copilotName.value} is ready for launch`;
         fuelStatus.innerHTML = "Fuel level is too low for launch";

         if (cargoMass.value > 10000) {
            cargoStatus.innerHTML = "Cargo mass too high";
         }

         faultyItems.style.visibility = "visible";
         launchStatus.style.color = "red";
         launchStatus.innerHTML = "Shuttle not ready for launch";
         event.preventDefault();
      } else {
         pilotStatus.innerHTML = `${pilotName.value} ready`;
         copilotStatus.innerHTML = `${copilotName.value} ready`;
         faultyItems.style.visibility = "visible";
         launchStatus.style.color = "green";
         launchStatus.innerHTML = "Shuttle ready for launch";
         event.preventDefault();
      }

   })

});