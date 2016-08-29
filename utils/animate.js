
(function (window) {

  function run (delay, update, hasNext) {

    var start = 0

    window.requestAnimationFrame(step)

    function step (time) {

      var progress = time - start
      var isNew = progress > delay
      if (isNew) {
        progress -= delay
        start = time
      }

      var result = update(isNew, progress / delay)

      if (hasNext(result)) {
        window.requestAnimationFrame(step)
      }
    }
  }


  /**
   * Ejecuta la animacion indefinidamente
   *
   * @param number delay
   * @param function(boolean, number) update
   */
  window.animate = function animate (delay, update) {
    run(delay, update, function () {
      return true
    })
  }

  /**
   * Ejecuta la animacion hasta que `update` retorne verdadero
   *
   * @param number delay
   * @param function(boolean, number) update
   */
  window.animate.until = function (delay, update) {
    run(delay, update, function (result) {
      return result
    })
  }

  /**
   * Ejecuta la animacion mientras `update` retorne verdadero
   *
   * @param number delay
   * @param function(boolean, number) update
   */
  window.animate.while = function (delay, update) {
    run(delay, update, function (result) {
      return !result
    })
  }

})(window);
