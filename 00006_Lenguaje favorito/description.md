Tenemos la variable `datos` con un objeto que guarda datos de personas. 
Necesitamos agregar la propiedad `lenguajeFavorito` si la propiedad `programa` es true, y asignarle como valor 'JavaScript'.

```js
let datos = {
  id: 1,
  nombre: "Ada",
  apellido: "Lovelace",
  email: "ada.lovelace@gmail.com",
  telefono: "1234567890",
  edad: 29,
  programa: true,
};

ム agregarLenguajeFavorito(datos);
ム datos;
  {
  id: 1,
  nombre: "Ada",
  apellido: "Lovelace",
  email: "ada.lovelace@gmail.com",
  telefono: "1234567890",
  edad: 29,
  programa: true,
  lenguajeFavorito: 'JavaScript'
};
```
> Definí el método `agregarLenguajeFavorito` que reciba un objeto por parámetro y agregue la propiedad si corresponde.