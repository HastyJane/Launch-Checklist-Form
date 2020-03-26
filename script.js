// Write your JavaScript code here!

//This block of code shows how to format the HTML once you fetch some planetary JSON!



window.addEventListener("load", function(){
   
   document.querySelector("form").addEventListener("submit", function(event){
      let pilotName = document.querySelector("input[name=pilotName]").value
      let copilotName = document.querySelector("input[name=copilotName]").value 
      let fuelLevel = document.querySelector("input[name=fuelLevel]").value
      let cargoMass = document.querySelector("input[name=cargoMass]").value
      if (pilotName == "" ||
          fuelLevel == "" ||
          copilotName == "" ||
          cargoMass == "") {
         alert("Please complete all fields");
         event.preventDefault();
      } else if (!isNaN(pilotName)  ||
                 !isNaN(copilotName) || 
                  isNaN(fuelLevel) ||
                  isNaN(cargoMass)) {
         alert("Verify that you have filled out all fields correctly");
         event.preventDefault();
      } else if (parseInt(fuelLevel) < 10000) {
         console.log("hello")
         document.getElementById("pilotStatus").innerHTML = `Pilot Ready: ${pilotName}`;
         document.getElementById("copilotStatus").innerHTML = `Co-Pilot Ready: ${copilotName}`;
         document.getElementById("faultyItems").style.visibility = "visible";
         document.getElementById("fuelStatus").innerHTML = "Fuel level is too low. Shuttle not ready to launch.";
         document.getElementById("launchStatus").innerHTML =  "Shuttle not ready for launch";
         document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch";
         document.getElementById("launchStatus").style.color = "red";
         event.preventDefault();

      } else if (parseInt(cargoMass) > 10000) {
         console.log("hello")
         document.getElementById("pilotStatus").innerHTML = `Pilot Ready: ${pilotName}`;
         document.getElementById("copilotStatus").innerHTML = `Co-Pilot Ready: ${copilotName}`;
         document.getElementById("faultyItems").style.visibility = "visible";
         document.getElementById("cargoStatus").innerHTML = "There is too much mass for the shuttle to take off. Shuttle not ready to launch.";
         document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch";
         document.getElementById("launchStatus").innerHTML =  "Shuttle not ready for launch";
         document.getElementById("launchStatus").style.color = "red";
         event.preventDefault();
        
      } else {
         document.getElementById("faultyItems").style.visibility = "hidden";
         document.getElementById("launchStatus").innerHTML =  "Shuttle is ready for launch";
         document.getElementById("launchStatus").style.color = "green";
         fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
            response.json().then(function(json) {
               let randomIndex = Math.floor((Math.random() * json.length));
               let missionTarget = document.getElementById("missionTarget")
               missionTarget.innerHTML = ""
               missionTarget.innerHTML += `<h2>Mission Destination</h2>`
               missionTarget.innerHTML += `<ol>`
               missionTarget.innerHTML += `<li>Name: ${json[randomIndex].name}</li>`
               missionTarget.innerHTML += `<li>Diameter: ${json[randomIndex].diameter}</li>`
               missionTarget.innerHTML += `<li>Star: ${json[randomIndex].star}</li>`
               missionTarget.innerHTML += `<li>Distance from Earth: ${json[randomIndex].distance}</li>`
               missionTarget.innerHTML += `<li>Number of Moons: ${json[randomIndex].moons}</li>`
               missionTarget.innerHTML += `</ol>`
               missionTarget.innerHTML += `<img src="${json[randomIndex].image}"></img>`
            })
         });
         event.preventDefault();
      }
   });
});




