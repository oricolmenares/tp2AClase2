const datos = {
  string: "hola",
  int: 3,
  float: 3.15,
  array: ["banana", "manzana", "pera"]
}

exports.getValue = (val) => {
  return datos[val];
}
