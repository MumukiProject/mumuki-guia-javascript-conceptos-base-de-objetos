Tenemos la variable `perfil`, que es un objeto con datos de una persona en linkedin.
En el objeto hay una propiedad `habilidades`, que es un array con las distintas habilidades de la persona.

```js
let perfil = {
  id: 123456789,
  nombre: "Ada Lovelace",
  url: "https://www.linkedin.com/in/ada-lovelace",
  habilidades: ["HTML", "CSS", "SASS"],
};

ム agregarHabilidad(perfil,'JavaScript')
 { id: 123456789,
   nnombreame: 'Ada Lovelace',
   url: 'https://www.linkedin.com/in/ada-lovelace',
   habilidades: [ 'HTML', 'CSS', 'SASS', 'Javascript' ] }
```

> Definí el método `agregarHabilidad` que reciba un `perfil` y una `habilidad` por parámetro y permita actualizar el perfil agregando la habilidad a al array de `habilidades`.