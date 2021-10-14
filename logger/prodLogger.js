const { createLogger, format, transports, transport } = require('winston');
const { combine, timestamp, json } = format;
require('winston-daily-rotate-file');

const tr = new transports.DailyRotateFile({
  filename: 'my-%DATE%.log',
  dirname: 'log',
  datePattern: 'YYYY-MM-DD',
  maxFiles: '1d',
});

const prodLogger = createLogger({
  level: 'info',
  format: combine(
    timestamp(),
    json()
    ),
  defaultMeta: { service : 'test-service'},
  transports: [tr]
})


module.exports = prodLogger;