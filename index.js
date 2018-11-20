// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(function(d) {
    console.log(d.name)
  })
}

function logDriversByHometown(drivers, home) {
  return x = drivers.filter(function(d) {
    if (d.hometown === home) {
      console.log(d.name)
    }

  })

}

const driversByRevenue = function(drivers) {
  return drivers.slice().sort(function(num1, num2) {
    return num1.revenue - num2.revenue
  })

}

const driversByName = function(drivers){
  return drivers.slice().sort(function(name1,name2){
    return name1.name.localeCompare(name2.name)
  })


}

const totalRevenue = function (drivers) {
  return drivers.reduce(function (total, currentDriver) {
    return currentDriver.revenue + total;
  }, 0);
};

const averageRevenue = function (drivers) {
  return totalRevenue(drivers) / drivers.length;
}
