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
			planets.push(newPlanet);
		},
		getActiveSpacecraft: function(){
			return activeSpacecraft;
		},
		setActiveSpacecraft: function(newSpacecraft){
			activeSpacecraft.push(newSpacecraft);
		},
		getPlanetsLandedOn: function(){
			return planetsLandedOn;
		},
		setPlanetsLandedOn: function(newPlanetLanded){
			planetsLandedOn = newPlanetLanded;
		}
	}
})();