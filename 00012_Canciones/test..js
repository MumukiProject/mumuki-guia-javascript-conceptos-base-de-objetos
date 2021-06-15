describe("", function() {
  it("Si hacemos estanActivas() ", function() {
    let bandas = [
      { id: 1, nombre: "Nirvana", fundacion: 1987, activa: false },
      { id: 2, nombre: "Foo Fighters", fundacion: 1994, activa: true },
      { id: 3, nombre: "Led Zeppelin", fundacion: 1967, activa: false },
      { id: 3, nombre: "Queens of the Stone Age", fundacion: 1997, activa: true },
      { id: 3, nombre: "Pearl Jam", fundacion: 1990, activa: true },
    ];
    resultado = estanActivas(bandas);
    assert.equal(resultado, "Nirvana no está activa\nFoo Fighters está activa desde el año 1994\nLed Zeppelin no está activa\nQueens of the Stone Age está activa desde el año 1997\nPearl Jam está activa desde el año 1990\n"
);
  })
})
/*
describe("", function() {
  it("Si hacemos estanActivas() ", function() {
    let bandas = [
      { id: 1, nombre: "Pink Floyd", fundacion: 1964, activa: false },
      { id: 2, nombre: "Eruca Sativa", fundacion: 2009, activa: true },
      { id: 3, nombre: "Queen", fundacion: 1970, activa: false },
      { id: 3, nombre: "The Beatles", fundacion: 1960, activa: false },
      { id: 3, nombre: "Pearl Jam", fundacion: 1990, activa: true },
    ];
    resultado = estanActivas(bandas);
    assert.equal(resultado, ' ');
  })
})
*/