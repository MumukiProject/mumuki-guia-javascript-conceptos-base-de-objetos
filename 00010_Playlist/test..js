describe("", function() {
  it("ifoDeLaPlaylist me muestra la información de la misma en el formato correcto", function() {
    let playlist = {
      nombre: "Lista de Nirvana",
      privada: true,
      canciones: ["Smells Like Teen Spirit", "In Bloom", "Come As You Are"]
    }
    let resultado = infoDeLaPlaylist(playlist);
    assert.equal(resultado, "Lista de Nirvana \n Privada: Sí\n Canciones:\n Smells Like Teen Spirit\nIn Bloom\nCome As You Are\n\n "
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
    assert(resultado.includes(Privada: Sí));
);
  })
})
