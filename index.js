const logger = require('./logger');

// console.log('log');
// console.warn('warn');
// console.error('error');

logger.info(process.env.NODE_ENV)
logger.log('info', "TEST")
logger.error("AHIA!!!")