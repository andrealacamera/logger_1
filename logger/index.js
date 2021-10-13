const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;

const theFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} -> [${level}]: ${message}`;
});
const logger = createLogger({
  level: 'debug',
  format: format.combine(
    format.timestamp(),
    format.colorize(),
    theFormat
  ),
  transports: [new transports.Console()]
})

module.exports = logger;