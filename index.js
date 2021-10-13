const logger = require('./logger');

//instead of the standard console.log() ...
// console.log('some information');
// console.warn('warning');
// console.error('error');

//... use logger!
logger.info(`NODE_ENV = ${process.env.NODE_ENV}`);
logger.warn(`a simple warning for you!`, {meta: 111});
logger.error("something's wrong here");
logger.debug("debug info");
logger.log('debug', "same of the previous line");

logger.error(new Error(`error message!`))