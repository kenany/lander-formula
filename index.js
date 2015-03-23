function lander(w, r) {
  return 100 * w / (101.3 - 2.67123 * r);
}

module.exports = lander;
