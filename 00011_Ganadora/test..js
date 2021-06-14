describe("", function() {
  it("Si hacemos ganadoras() nos retorna la lista de ganadoras en el formato correcto", function() {
    let resultado = ganadoras();
    assert.equal(resultado, "Lista de Nirvana \n Privada: Sí\n Canciones:\n Smells Like Teen Spirit\nIn Bloom\nCome As You Are\n\n ");
  })
})
