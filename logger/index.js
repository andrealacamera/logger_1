const { createLogger, format, transports } = require('winston');
const { combine, timestamp, printf } = format;

const theFormat = printf(({ level, message, timestamp, stack }) => {
  return `${timestamp} -> [${level}]: ${stack || message}`;
});
const logger = createLogger({
  level: 'debug',
  format: format.combine(
    format.timestamp(),
    format.colorize(),
    format.errors({stack: true}),
    theFormat
  ),
  transports: [new transports.Console()]
})

module.exports = logger;