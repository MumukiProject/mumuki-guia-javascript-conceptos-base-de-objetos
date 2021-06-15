Tenemos un array de objetos, que representa un listado de bandas.
Cada objeto representa una banda, y tiene las propidades `id`, `nombre`, `fundacion`, `activa`. Por ejemplo:

```js
let bandas = [
  { id: 1, nombre: "Nirvana", fundacion: 1987, activa: false },
  { id: 2, nombre: "Foo Fighters", fundacion: 1994, activa: true },
  { id: 3, nombre: "Led Zeppelin", fundacion: 1967, activa: false },
  { id: 3, nombre: "Queens of the Stone Age", fundacion: 1997, activa: true },
  { id: 3, nombre: "Pearl Jam", fundacion: 1990, activa: true },
];

ム estanActivas(bandas);
Nirvana no está activa
Foo Fighters está activa desde el año 1994
Led Zeppelin no está activa
Queens of the Stone Age está activa desde el año 1997
Pearl Jam está activa desde el año 1990
```

> Definí la función `estanActivas` que reciba un array de bandas por parámetro y retorne por cada una de ellas los siguientes mensajes según corresponda:
> 
  - Si la banda está activa: "[NOMBRE DE LA BANDA] está activa desde el año [AÑO DE FUNDACIÓN]";
  - Si la banda NO está activa: "[NOMBRE DE LA BANDA] no está activa".