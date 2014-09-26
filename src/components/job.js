/** @jsx React.DOM */
module.exports = function(React) {
  var Job = React.createClass({
    render: function() {
      return (
        <tr>
          <td>{this.props.id}</td>
          <td>{this.props.type}</td>
          <td>{this.props.status}</td>
          <td>{this.props.progress}</td>
          <td>
            <button onClick={this.deleteJob}>Delete</button>
            <button onClick={this.revertToPending}>Re-enqueue</button>
          </td>
        </tr>
      )
    },
    deleteJob: function() {
      this.props.handler.fn.deleteById(this.props)
    },
    revertToPending: function() {
      this.props.handler.fn.pendingById(this.props)
    }
  });
  return Job
}
