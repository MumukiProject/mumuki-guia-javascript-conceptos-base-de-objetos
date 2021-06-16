Tenemos un objeto en la variable `song` con diferentes propiedades que representan una canción de spotify.
Queremos retornar en una función `cancion` un nuevo objeto, a partir de las propiedades del objeto que recibimos como argumento. El mismo debe tener las propiedades `titulo`, `banda`, y `duracion` (en segundos, ya que en el parámetro está en milisegundos). Por ejemplo:

```js
let song = {
  title: "Rock and Roll",
  bandName: "Led Zeppelin",
  duration: 166000,
  album: "Led Zeppelin IV",
};

ム cancion(song)
{ titulo: 'Rock and Roll', banda: 'Led Zeppelin', duracion: 166 }
```

> Definí la función `cancion` que reciba como argumento un objeto `song` y retorne las propiedades como acabamos de descrobir.