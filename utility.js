const logger = require('./logger')


const test_function = () => {
  let r =  Math.random();
  if (r < 0.5) {
    logger.error(`from test_function`, {data : r, module: "test_function"}); 
  } else {
    logger.info(`from test_function --> it's ok here!`);
  }
};


module.exports = test_function;