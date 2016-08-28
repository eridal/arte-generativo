Lineas
======

1. [ctx.lineWidth](#ctxlinewidth)
1. [ctx.lineCap](#ctxlinecap)

---

## [ctx.lineWidth](https://developer.mozilla.org/es/docs/Web/API/CanvasRenderingContext2D/lineWidth)

Define el grosor de las lineas, en unidades de espacio.

    ctx.lineWidth = value;

> Cuando se lee, se obtiene el valor actual.

> Cuando se escribe, valores como `0`, negativos, `Infinity` y `NaN` son ignorados.

### Ejemplo

```js
// dibuja una linea desde (50, 50) hasta (100, 100) de 25px de ancho
ctx.beginPath()
ctx.moveTo(50, 50)
ctx.lineWidth = 25 // <-- 25 pixeles de ancho
ctx.lineTo(100, 100)
ctx.stroke()
```

---

## [ctx.lineCap](https://developer.mozilla.org/es/docs/Web/API/CanvasRenderingContext2D/lineCap)

Determina como el punto final de cada linea es dibujado.

Hay tres posibles valores para esta propiedad: `butt` (valor por default), `round` y `square`.

    ctx.lineCap = 'butt';
    ctx.lineCap = 'round';
    ctx.lineCap = 'square';

### Ejemplo

```js
// dibuja una linea desde (50, 50) hasta (100, 100) con sus puntas redondeadas
ctx.beginPath()
ctx.moveTo(50, 50)
ctx.lineWidth = 25
ctx.lineCap = 'round' // <-- borde redondeado
ctx.lineTo(100, 100)
ctx.stroke()
```

```js
console.log(ctx.lineCap)
```

#### Comparando Estilos

Este ejemplo dibuja 3 lineas, una por cada estilo de `lineCap` a modo de comparacion.

```js
var lineCaps = ['butt','round','square']

ctx.strokeStyle = '#09f'
ctx.beginPath()
ctx.moveTo( 10,  10)
ctx.lineTo(140,  10)
ctx.moveTo( 10, 140)
ctx.lineTo(140, 140)
ctx.stroke()

ctx.strokeStyle = 'black'

lineCaps.forEach(function (lineCap, i) {
  ctx.lineWidth = 15
  ctx.lineCap = lineCap
  ctx.beginPath()
  ctx.moveTo(25 + i * 50, 10)
  ctx.lineTo(25 + i * 50, 140)
  ctx.stroke()
})
