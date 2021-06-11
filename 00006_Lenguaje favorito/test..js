describe("Hay un método agregarLenguajeFavorito", function() {
  it("", function() {
    assert(agregarLenguajeFavorito);
  })
})

describe("Si tenemos un objeto que tiene la propiedad programa: true y hacemos agregarLenguajeFavorito(objeto), la propiedad se agrega al objeto", function() {
  it("", function() {
    let datos = {
      id: 1,
      nombre: "Ada",
      apellido: "Lovelace",
      email: "ada.lovelace@gmail.com",
      telefono: "1234567890",
      edad: 29,
      programa: true,
    };
    agregarLenguajeFavorito(datos)
    assert.equal(datos.lenguajeFavorito, 'JavaScript');
  })
})