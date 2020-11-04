// Problem 0 : Part B (15 mins):
// Iterating with JSON object’s Values
// Above is some information about my car. As you can see, I am not the best driver.
// I have caused a few accidents.
// Please update this driving record so that I can feel better about my driving skills.

// 1. Loop over the accidents array. Change atFaultForAccident from true to false.
// 2. Print the dated of my accidents

var myCar = {
  make: "Bugatti",
  model: "Bugatti La Voiture Noire",
  year: 2019,
  accidents: [
    {
      date: "3/15/2019",
      damage_points: "5000",
      atFaultForAccident: true,
    },
    {
      date: "7/4/2022",
      damage_points: "2200",
      atFaultForAccident: true,
    },
    {
      date: "6/22/2021",
      damage_points: "7900",
      atFaultForAccident: true,
    },
  ],
};

//PS-1
for (i = 0; i < myCar.accidents.length; i++) {
  myCar.accidents[i].atFaultForAccident = false;
  console.log(
    `atFaultforAccident Changed to ${myCar.accidents[i].atFaultForAccident}`
  );
  console.log(`My Accident dates are ${myCar.accidents[i].date}`);
}

//console.log(myCar.accidents);

//PS-2
