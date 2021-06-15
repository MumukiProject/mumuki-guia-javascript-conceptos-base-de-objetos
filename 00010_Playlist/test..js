describe("", function() {
  it("infoDeLaPlaylist muestra la información de la manera solicitada", function() {
    let playlist = {
      nombre: "Lista de Nirvana",
      privada: true,
      canciones: ["Smells Like Teen Spirit", "In Bloom", "Come As You Are"]
    }
    let resultado = infoDeLaPlaylist(playlist);
    assert.equal(resultado.includes("Lista de Nirvana")
    assert.equal(resultado.includes("Privada: Sí")
    assert.equal(resultado.includes("Canciones:")
    assert.equal(resultado.includes("Smells Like Teen Spirit")
    assert.equal(resultado.includes("In Bloom")
    assert.equal(resultado.includes("Come As You Are")
);
  })
})

describe("", function() {
  it("Si la playlist dice privada true se muestra Privada: Si", function() {
    let playlist = {
      nombre: "Lista de Nirvana",
      privada: true,
      canciones: ["Smells Like Teen Spirit", "In Bloom", "Come As You Are"]
    }
    let resultado = infoDeLaPlaylist(playlist);
    assert(resultado.includes('Privada: Sí'));
  })
})

describe("", function() {
  it("Si la playlist dice privada false se muestra Privada: No", function() {
    let playlist = {
      nombre: "Lista de Nirvana",
      privada: false,
      canciones: ["Smells Like Teen Spirit", "In Bloom", "Come As You Are"]
    }
    let resultado = infoDeLaPlaylist(playlist);
    assert(resultado.includes('Privada: No'));
  })
})