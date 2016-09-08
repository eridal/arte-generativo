
(function (window) {

  function run (delay, update, hasNext) {

    var start = 0

    window.requestAnimationFrame(step)

    function step (time) {
      var result;
      var changed = (time - start) > delay
      if (changed) {
        start = time
        result = update()
      }

      if (!changed || hasNext(result)) {
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
