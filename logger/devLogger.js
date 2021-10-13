const { createLogger, format, transports } = require('winston');
const { combine, timestamp, printf, errors, colorize } = format;

const theFormat = printf(({ level, message, timestamp, stack }) => {
  return `${timestamp} -> [${level}]: ${stack || message}`;
});
const devLogger = createLogger({
  level: 'debug',
  format: combine(
    timestamp(),
    colorize(),
    errors({stack: true}),
    theFormat
  ),
  transports: [new transports.Console()]
})


module.exports = devLogger;