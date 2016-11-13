
/**
 * Crea un punto en coordenadas cartesianas
 */
function cart (x, y) {
  return new Cart(x, y)
}

/**
 * Representa un punto en coordenadas Cartesianas
 */
function Cart (x, y) {
  this.x = x
  this.y = y
}

Cart.prototype = {

  /**
   * Convierte el punto a polares
   */
  polar: function () {
    return new Polar(this.r(), this.a())
  },

  /**
   * Devuelve el radio polar del punto
   */
  r: function () {
    return Math.sqrt(
      this.x * this.x + this.y * this.y
    )
  },

  /**
   * Devuelve el angulo polar del punto
   */
  a: function () {
    return this.x === 0 
      ? Math.PI / 2 * Math.sign(this.y)
      : Math.atan(this.y / this.x)
  },
}

/**
 * Crea un punto en coordenadas polares
 */
function polar (r, a) {
  return new Polar(r, a)
}

/**
 * Representa un punto en coordenadas polares
 */
function Polar (r, a) {
  this.r = r
  this.a = a
}

Polar.prototype = {

  /**
   * Convierte el punto a coordenadas cartesianas
   */
  cart: function () {
    return new Cart(this.x(), this.y())
  },

  /**
   * Devuelve la coordenada cartesiana X del punto
   */
  x: function () {
    return this.r * Math.cos(this.a)
  },

  /**
   * Devuelve la coordenada cartesiana Y del punto
   */
  y: function () {
    return this.r * Math.sin(this.a)
  },
}
