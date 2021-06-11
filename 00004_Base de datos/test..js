describe("Hay un objeto ada", function() {
  it("", function() {
    assert(ada);
  })
})

describe("Hay un objeto grace", function() {
  it("", function() {
    assert(grace);
  })
})

describe("Hay un objeto hedy", function() {
  it("", function() {
    assert(hedy);
  })
})

describe("Hay un objeto radia", function() {
  it("", function() {
    assert(radia);
  })
})

describe("Hay un objeto sheryl", function() {
  it("", function() {
    assert(sheryl);
  })
})

describe("", function() {
  it("ada tiene un id 1", function() {
    assert.equal(ada.id, 1);
  })
})

describe("", function() {
  it("grace tiene email grace@hotmail.com", function() {
    assert.equal(grace.email, 'grace@hotmail.com');
  })
})

describe("", function() {
  it("hedy tiene nombre Hedy Lamarr", function() {
    assert.equal(hedy.nombre, 'Hedy Lamarr');
  })
})

describe("", function() {
  it("radia tiene telefono 1234509876", function() {
    assert.equal(radia.telefono, 1234509876);
  })
})

describe("", function() {
  it("sheryl tiene telefono 5432167890 y nombre Sheryl Sandberg", function() {
    assert.equal(sheryl.telefono, 5432167890);
    assert.equal(sheryl.nombre, 'Sheryl Sandberg');
  })
})
