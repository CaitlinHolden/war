const expect = chai.expect;

describe('', () => {
  it('player has name', () => {
      expect(playGame).to.have.property('playerName');
  })
  it('player does not have name', () => {
    expect(function () {
      playGame.playerName;
    }).to.throw(Error);
  });
});