var color = [0, 0, 0]
var x = 0
var y = 0

function main (ctx, canvas) {

  canvas.width = 640
  canvas.height = 480

  animate.while(500, function () {
    dibujar(ctx)
  })
}

function dibujar (ctx) {

  var rx = random(ctx.canvas.width)
  var ry = random(ctx.canvas.height)
  var rc = randomInt(2)

  ctx.beginPath()
  ctx.moveTo(x, y)
  ctx.lineTo(rx, ry)
  ctx.strokeStyle = 'rgb(' + color.join(',') + ')'
  ctx.stroke()

  color[rc] = (color[rc] + 10) % 255
  x = rx
  y = ry
}
