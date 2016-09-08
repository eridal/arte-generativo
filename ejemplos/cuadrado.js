var W = 640
var H = 480

var box = {
  x: 100,
  y: 100,
  w: 200,
  h: 200,
}

var vel = {
  x: randomInt(5, 10) * randomSign(),
  y: randomInt(5, 10) * randomSign(),
}

var colors = [
  randomInt(255),
  randomInt(255),
  randomInt(255),
]

function main (ctx, canvas) {

  canvas.width = W
  canvas.height = H

  ctx.fillStyle = 'white'
  ctx.fillRect(0, 0, W, H)

  animate(250, function () {
    avanzar()
    mutar()
    dibujar()
  })
}

function avanzar () {

  box.x += vel.x;
  box.y += vel.y;

  if (box.x < 0 || W < box.x + box.w) {
    vel.x *= -1
    box.x += 2 * vel.x
  }

  if (box.y < 0 || H < box.y + box.h) {
    vel.y *= -1
    box.y += 2 * vel.y
  }
}

function mutar () {
  var i = randomIndex(colors)
  var v = randomInt(-1, +5)

  var color = colors[i] + v

  if (color < 0) {
    color = Math.abs(color)
  }

  if (color > 255) {
    color = color - (color % 255)
  }

  colors[i] = color
}

function dibujar () {
  ctx.clearRect(box.x, box.y, box.w, box.h)

  ctx.fillStyle = 'rgb(' + colors.join(',') + ')'
  ctx.fillRect(box.x, box.y, box.w, box.h)
}
