describe("", function() {
  it("Si la canción recibida por parámetro tiene una duration de 166000 la cancion tiene una duracion de 166 segundos", function() {
    let song = {
    title: "Rock and Roll",
    bandName: "Led Zeppelin",
    duration: 166000,
    album: "Led Zeppelin IV",
    };
    let resultado = cancion(song);
    assert.equal(resultado.duracion, 166);
  })
})

describe("", function() {
  it("Si song tiene un title 'Shine on you crazy diamond' la cancion tiene como titulo 'Shine on you crazy diamond'", function() {
    song = {
      title: 'Shine on you crazy diamond',
      bandName: "Pink Floyd",
      duration: 1560000,
      album: "Wish you where here",
    };
    let resultado = cancion(song);
    assert.equal(resultado.titulo, 'Shine on you crazy diamond');
  })
})