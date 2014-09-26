/** @jsx React.DOM */
module.exports = function(React) {
  var Job = require('./job')(React)
  var Jobs = React.createClass({
    render: function() {
      var head = <tr>
        <th>id</th>
        <th>type</th>
        <th>status</th>
        <th>progress</th>
        <th>actions</th>
      </tr>
      var rows = [];
      this.props.jobs.forEach(function(job) {
        rows.push(<Job
          key={job.id}
          id={job.id}
          type={job.type}
          status={job.status}
          progress={job.progress}
          handler={this.props.controller.redisHandler}
        />)
      }.bind(this));
      return (
        <div>
          <h2>{this.props.category}</h2>
          <table className='table'>
            <thead>
              {head}
            </thead>
            <tbody>
              {rows}
            </tbody>
          </table>
        </div>
      )
    },
    componentWillMount: function() {
      this.props.controller.fetch()
    }
  });
  return Jobs
}
