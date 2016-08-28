
/**
 * @param number min [optional]
 * @param number max
 *
 * @return number
 */
function random (min, max) {
  if (arguments.length === 1) {
    max = min
    min = 0
  }
  return min + Math.random() * (max - min + 1)
}

/**
 * @param number min [optional]
 * @param number max
 *
 * @return int
 */
function randomInt (min, max) {
  var r = arguments.length === 1 ? random(min)
                                 : random(min, max)
  return Math.floor(r)
}

/**
 * @return int
 */
function randomSign () {
  return random() > 0.5 ? +1 : -1
}

/**
 * @param array array
 * @return int
 */
function randomIndex (array) {
  if (array.length > 0) {
    return randomInt(array.length - 1)
  }
  throw new Error('randomIndex() from empty array')
}

/**
 * @param array array
 * @return int
 */
function randomValue (array) {
  var i = randomIndex(array)
  return array[i]
}
