JobsController = require('./src/controllers/jobs_controller')

module.exports = function (React) {
  var ReactLib = React || window.React
  if (!ReactLib)
    throw new Error('react-bull requires React')
  return { 
    JobsController: JobsController(ReactLib)
  }
}
