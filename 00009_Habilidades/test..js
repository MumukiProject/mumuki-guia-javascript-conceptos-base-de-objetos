describe("", function() {
  it("Si hacemos agregarHabilidad(perfil, 'JavaScript') se agrega Javascript al array de habilidades", function() {
    let perfil = {
      id: 123456789,
      nombre: "Ada Lovelace",
      url: "https://www.linkedin.com/in/ada-lovelace",
      habilidades: ["HTML", "CSS", "SASS"],
    };
    agregarHabilidad(perfil, 'JavaScript');
    assert.deepEqual(perfil.habilidades, ['HTML', 'CSS', 'SASS', 'Javascript']);
  })
})

describe("", function() {
  it("Si hacemos agregarHabilidad(perfil, 'Ruby') se agrega Ruby al array de habilidades", function() {
    let perfil = {
      id: 123456789,
      nombre: "Ada Lovelace",
      url: "https://www.linkedin.com/in/ada-lovelace",
      habilidades: ["HTML", "CSS", "SASS"],
    };
    agregarHabilidad(perfil, 'Ruby');
    assert.deepEqual(perfil.habilidades, ['HTML', 'CSS', 'SASS', 'Ruby']);
  })
})

describe("", function() {
  it("Si hacemos agregarHabilidad(perfil, 'React') se agrega React al array de habilidades", function() {
    let perfil = {
      id: 123456789,
      nombre: "Ada Lovelace",
      url: "https://www.linkedin.com/in/ada-lovelace",
      habilidades: ["HTML", "CSS", "SASS"],
    };
    agregarHabilidad(perfil, 'React');
    assert.deepEqual(perfil.habilidades, ['HTML', 'CSS', 'SASS', 'React']);
  })
}) 