// 1. public property for holding the last modified date
// 2. getter/setter for planets
// 3. getter/setter for activeSpacecraft
// 4. getter/setter for planetsLandedOn

var SolarSystem = (function(){
	var planets = [];
	var activeSpacecraft = [];
	var planetsLandedOn = 0;
	return{
		modified_date: new Date(),
		getPlanets: function(){
			return planets;
		},
		setPlanets: function(newPlanet){
			planets = newPlanet;
		},
		getActiveSpacecraft: function(){
			return activeSpacecraft;
		},
		setActiveSpacecraft: function(newSpacecraft){
			activeSpacecraft = newSpacecraft;
		},
		getPlanetsLandedOn: function(){
			return planetsLandedOn;
		},
		setPlanetsLandedOn: function(newPlanetLanded){
			planetsLandedOn = newPlanetLanded;
		}
	}
})();