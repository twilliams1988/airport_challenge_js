function Airport() {
  this.planes = [];
};

Airport.prototype = {
  // planes: function() {
  //   return this.planes;
  // },
  land: function(plane) {
    return this.planes.push(plane);
  },
  takeOff: function(plane) {
    return this.planes.pop(plane);
  }
};
