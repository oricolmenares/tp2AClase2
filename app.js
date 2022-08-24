let src = require('./src/src');

try {
  console.log(src.getValue("algo"));

} catch(err){
  console.log(err.message)
}
