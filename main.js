console.log("SolarSystem IIFE", SolarSystem);

console.log("Planets: ", SolarSystem.setPlanets(["mercury", "neptune"]));
console.log("Planets: ", SolarSystem.getPlanets());

console.log("Active Spacecraft: ", SolarSystem.setActiveSpacecraft(["voyager", "cassini"]));
console.log("Active Spacecraft: ", SolarSystem.getActiveSpacecraft());

console.log("Planets Landed On: ", SolarSystem.setPlanetsLandedOn(["venus", "mars"]));
console.log("Planets Landed On: ", SolarSystem.getPlanetsLandedOn());

console.log("Closest Stars: ", SolarSystem.setClosestStars(["Alpha Centauri A & B", "Proxima Centauri"]));
console.log("Closest Stars: ", SolarSystem.getClosestStars());

console.log("Age of Solar System (in years): ", SolarSystem.setAgeOfSolarSystem(4600000000));
console.log("Age of Solar System (in years): ", SolarSystem.getAgeOfSolarSystem());

console.log("Dwarf Planets: ", SolarSystem.setDwarfPlanets(["pluto"]));
console.log("Dwarf Planets: ", SolarSystem.getDwarfPlanets());