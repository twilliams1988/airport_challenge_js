describe('Airport', function() {
  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
  });

  describe('#land', function() {
    it('lands plane and returns confirmation', function() {
      expect(airport.land(plane)).toEqual(plane);
    });
  });
});
