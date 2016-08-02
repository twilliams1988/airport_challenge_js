describe('Airport', function() {
  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
  });

  describe('#land', function() {
    it('lands plane and returns confirmation', function() {
      airport.land(plane)
      expect(airport.planes).toEqual([plane]);
    });
  });
  describe('#takeOff', function() {
    it('takes off a plane and confirms it has left airport', function (){
    airport.land(plane)
    airport.takeOff(plane)
    expect(airport.planes).toEqual([])
   });
  });
// --
});
