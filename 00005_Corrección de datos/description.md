Tenemos la variable `datos` que tiene un objeto con los datos de una persona. El teléfono de la misma está mal y tenemos que modificarlo, pero no podemos modificar la definición/creación del objeto.

```js
var datos = {
  id: 1,
  nombre: "Ada",
  apellido: "Lovelace",
  email: "ada.lovelace@gmail.com",
  telefono: "1234567890",
  edad: "29",
  programa: true,
};
```
> Definí el método `modificarDato` que reciba una persona por parámetro y modifique el teléfono, asignándole como nuevo número `0192837465`, y la `edad` ya que es un string y necesitamos que sea un número.
