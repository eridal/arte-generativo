
(function (window) {

  /**
   * Convierte de grados a radianes
   *
   * @param number grados
   * @return number 
   */
  window.radianes = function radianes (grados) {
    return grados * Math.PI / 180
  }

  /**
   * Convierte de radianes a grados
   *
   * @param number radianes
   * @return number 
   */
  window.grados = function grados (radianes) {
    return radianes * 180 / Math.PI 
  }

})(window)
