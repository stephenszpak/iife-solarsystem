var SolarSystem = (function(newSolarSystem){
	var closestStars = [""];
	var ageOfSolarSystem = 0;
	var dwarfPlanets = ["pluto"]

	newSolarSystem.getClosestStars = function(){
		return closestStars;
	};
	newSolarSystem.setClosestStars = function(newStars){
		closestStars.push(newStars); //when its an array need to do .push, will just replace the array rather than create a new array
	};
	newSolarSystem.getAgeOfSolarSystem = function(){
		return ageOfSolarSystem;
	};
	newSolarSystem.setAgeOfSolarSystem = function(age){
		ageOfSolarSystem = age;
	};
	newSolarSystem.getDwarfPlanets = function(){
		return dwarfPlanets;
	};
	newSolarSystem.setDwarfPlanets = function(newDwarfPlanet){
		dwarfPlanets.push(newDwarfPlanet) 
	};

	return newSolarSystem;
})(SolarSystem || {});