
/**
 * @param number min [optional]
 * @param number max
 *
 * @return number
 */
function random (min, max) {

  if (arguments.length === 0) {
    return Math.random()
  }

  if (arguments.length === 1) {
    return Math.random() * min
  }

  return min + Math.random() * (max - min)
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
    return randomInt(array.length)
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

random.sign = randomSign
random.int = randomInt
random.index = randomIndex
random.value = randomValue
