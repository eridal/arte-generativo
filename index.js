
window.addEventListener('load', function () {

  var canvas = document.getElementById('canvas')
  var ctx = canvas.getContext('2d')

  window.ctx = ctx

  main(ctx)
})

function main (ctx) {
  console.log(ctx)
}
