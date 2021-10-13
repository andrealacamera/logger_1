const { createLogger, format, transports, transport } = require('winston');
const { combine, timestamp, json } = format;



const prodLogger = createLogger({
  level: 'info',
  format: combine(
    timestamp(),
    json()
    ),
  defaultMeta: { service : 'test-service'},
  transports: [
    new transports.File({ 
      filename: 'my.log',
      dirname: 'log',
    }),
    new transports.Console()
  ]
})


module.exports = prodLogger;