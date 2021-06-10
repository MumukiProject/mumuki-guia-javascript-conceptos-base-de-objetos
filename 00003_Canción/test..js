describe("Se declaró la variable cancion", function() {
  it("", function() {
    assert(cancion);
  })
})

describe("", function() {
  it("cancion tiene la propiedad titulo", function() {
    assert(cancion.titulo);
  })
})

describe("", function() {
  it("cancion tiene la propiedad banda", function() {
    assert(cancion.banda);
  })
})

describe("", function() {
  it("cancion tiene la propiedad duracion", function() {
    assert(cancion.duracion);
  })
})

describe("", function() {
  it("Si song tiene una duration de 166000 la cancion tiene una duracion de 166 segundos", function() {
    let song = {
    title: "Rock and Roll",
    bandName: "Led Zeppelin",
    duration: 166000,
    album: "Led Zeppelin IV",
  };
    assert.equal(cancion.duracion, 166);
  })
})
