console.log("SolarSystem IIFE", SolarSystem);

console.log("Planets ", SolarSystem.setPlanets(["mercury", "neptune"]));
console.log("Planets ", SolarSystem.getPlanets());

console.log("Active Spacecraft ", SolarSystem.setActiveSpacecraft(["voyager", "cassini"]));
console.log("Active Spacecraft ", SolarSystem.getActiveSpacecraft());

console.log("Planets Landed On", SolarSystem.setPlanetsLandedOn(["venus", "mars"]));
console.log("Planets Landed On", SolarSystem.getPlanetsLandedOn());