describe("", function() {
  it("ifoDeLaPlaylist me muestra la información de la misma en el formato correcto", function() {
    let playlist = {
      nombre: "Lista de Nirvana",
      privada: true,
      canciones: ["Smells Like Teen Spirit", "In Bloom", "Come As You Are"]
    }
    let resultado = infoDeLaPlaylist(playlist);
    assert.equal(resultado, "Lista de Nirvana"
                              "Privada: Sí"
                              "Canciones:"
                              "Smells Like Teen Spirit"
                              "In Bloom"
                              "Come As You Are"
);
  })
})
