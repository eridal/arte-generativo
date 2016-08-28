Textos
======

1. [ctx.fillText()](#ctxfilltext)
1. [ctx.strokeText()](#ctxstroketext)
1. [ctx.measureText()](#ctxmeasuretext)

---

## [ctx.fillText()](https://developer.mozilla.org/es/docs/Web/API/CanvasRenderingContext2D/fillText)

Llena un texto `text` en la posicion `(x, y)`.

    void ctx.fillText(text, x, y [, maxWidth]);

Si esta presente `maxWidth` se limitar el ancho maximo y el texto se escalará hasta ese ancho.

### Ejemplo

```js
// escribe "Hola Mundo!", en azul, en la posicion (50, 100)
ctx.font = '24px serif'
ctx.fillStyle = 'blue'
ctx.fillText('Hola Mundo!', 50, 100)
```

---

## [ctx.strokeText()](https://developer.mozilla.org/es/docs/Web/API/CanvasRenderingContext2D/strokeText)

Dibuja el contorno de un texto `text` en la posicion `(x, y)`

    void ctx.fillText(text, x, y [, maxWidth]);

Si esta presente `maxWidth` se limitar el ancho maximo y el texto se escalará hasta ese ancho.

### Ejemplo

```js
// delinea "Hola Mundo!", en rojo, en la posicion (50, 100)
ctx.font = '24px serif'
ctx.strokeStyle = 'red'
ctx.strokeText('Hola Mundo!', 50, 100)
```

---

## [ctx.measureText()](https://developer.mozilla.org/es/docs/Web/API/CanvasRenderingContext2D/measureText)

Retorna un objeto de metrica de texto (`TextMetrics`) que contiene informacion acerca del texto (como su ancho por ejemplo).

    TextMetrics ctx.measureText(text);

> Mas info sobre [TextMetrics](https://developer.mozilla.org/es/docs/Web/API/TextMetrics)

### Ejemplo

```js
// imprime por console el ancho del texto "arte"
var texto = ctx.measureText('arte')
console.log(texto.width)
```
