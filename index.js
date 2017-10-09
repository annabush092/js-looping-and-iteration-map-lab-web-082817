// Code your solution in this file.
function lowerCaseDrivers(driverArray) {
  return driverArray.map(
    function(dr) {
      return dr.toLowerCase();
    }
  )
}

function nameToAttributes(driverArray) {
  return driverArray.map(
    function(dr) {
      let nameArr = dr.split(" ");
      return {firstName: nameArr[0], lastName: nameArr[1]};
    }
  )
}

function attributesToPhrase(driversArray) {
  return driversArray.map(
    function(dr) {
      return `${dr.name} is from ${dr.hometown}`;
    }
  )
}
