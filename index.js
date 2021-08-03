/**
 * Calculates the one-repetition maximum according to Lander's formula.
 *
 * @param {number} w Weight.
 * @param {number} r Reps.
 * @returns {number} One-repetition maximum.
 */
function lander(w, r) {
  return 100 * w / (101.3 - 2.67123 * r);
}

module.exports = lander;
