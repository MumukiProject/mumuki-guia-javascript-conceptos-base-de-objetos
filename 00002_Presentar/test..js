describe("Se declaró la variable perfil", function() {
  it("", function() {
    assert(perfil);
  })
})

describe("", function() {
  it("user tiene la propiedad name", function() {
    assert(perfil.nombre);
  })
})

describe("", function() {
  it("user tiene la propiedad email", function() {
    assert(perfil.email);
  })
})

describe("", function() {
  it("user tiene la propiedad age", function() {
    assert(perfil.edad);
  })
})

describe("", function() {
  it("Se declaró la función presentacion", function() {
    assert(perfil.presentacion);
  })
})

describe("", function() {
  it("Si el nombre es Juli y la edad es 48, retorna Hola, mi nombre es Juli y tengo 48 años", function() {
    perfil.nombre = 'Juli';
    perfil.edad = 48;
    assert.equal(perfil.presentacion,'Hola, mi nombre es Juli y tengo 48 años');
  })
})