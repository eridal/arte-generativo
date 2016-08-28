Rectangulos
===========

1. [ctx.clearRect()](#ctxclearrect)
1. [ctx.fillRect()](#ctxfillrect)
1. [ctx.strokeRect()](#ctxstrokerect)

---

## [ctx.clearRect()](https://developer.mozilla.org/es/docs/Web/API/CanvasRenderingContext2D/clearRect)

Define todos los pixeles en el rectangulo definido por el punto inicial `(x, y)` y su tamaño `(width, height)` como negro transparente, borrando cualquier contenido dibujado previamente.

    void ctx.clearRect(x, y, width, height);

### Ejemplo

```js
// Borra un rectangulo de 100x100 en (10, 10)
ctx.clearRect(10, 10, 100, 100)
```

---

## [ctx.fillRect()](https://developer.mozilla.org/es/docs/Web/API/CanvasRenderingContext2D/fillRect)

Dibuja un rectangulo completo en la posicion `(x, y)` con tamaño `(width, height)` y cuyo
estilo esta determinado por el atributo `fillStyle`

    void ctx.fillRect(x, y, width, height);

### Ejemplo

```js
// dibuja un rectangulo rojo de 100x100 en (10, 10)
ctx.fillStyle = 'red'
ctx.fillRect(10, 10, 100, 100)
```

---

## [ctx.strokeRect()](https://developer.mozilla.org/es/docs/Web/API/CanvasRenderingContext2D/strokeRect)

Dibuja un rectangulo en la posicion `(x, y)` con tamaño `(width, height)` y cuyo 
borde esta determinado por el atributo `strokeStyle`

    void ctx.strokeRect(x, y, width, height);

### Ejemplo

```js
// dibuja un rectangulo de 100x100 en (10, 10) con borde azul
ctx.strokeStyle = '5px solid blue'
ctx.strokeRect(10, 10, 100, 100)
```
