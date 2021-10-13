const { createLogger, format, transports } = require('winston');
const { combine, timestamp } = format;



const prodLogger = createLogger({
  level: 'info',
  format: combine(
    format.json(),
    timestamp()
    ),
  defaultMeta: { service : 'test-service'},
  transports: [new transports.File({ filename: 'my.log'}),]
})


module.exports = prodLogger;