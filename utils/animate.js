
(function (window) {

  function run (delay, update, hasNext) {
    return new Promise(function (resolve) {

      var start = 0

      window.requestAnimationFrame(
        function step (time) {
          var result
          var changed = (time - start) > delay
          if (changed) {
            start = time
            result = update()
          }

          if (!changed || hasNext(result)) {
            window.requestAnimationFrame(step)
          } else {
            resolve()
          }
        }
      )
    })
  }

  /**
   * Ejecuta la animacion indefinidamente
   *
   * @param number delay
   * @param function(boolean, number) update
   * @return Promise
   */
  window.animate = function animate (delay, update) {
    return run(delay, update, function () {
      return true
    })
  }

  /**
   * Ejecuta la animacion hasta que `update` retorne verdadero
   *
   * @param number delay
   * @param function(boolean, number) update
   * @return Promise
   */
  window.animate.until = function (delay, update) {
    return run(delay, update, function (result) {
      return result
    })
  }

  /**
   * Ejecuta la animacion mientras `update` retorne verdadero
   *
   * @param number delay
   * @param function(boolean, number) update
   * @return Promise
   */
  window.animate.while = function (delay, update) {
    return run(delay, update, function (result) {
      return !result
    })
  }

})(window);
