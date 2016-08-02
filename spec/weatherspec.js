describe('Weather', function() {
  var weather;

  beforeEach(function() {
    weather = new Weather();
  });

  describe('#stormy', function() {
    it('generates stormy weather', function() {
      expect(weather.stormy).toEqual(true);
    });
  });
});
