/** @jsx React.DOM */
module.exports = function(React) {
  return function (category, config) {
    var Jobs = require('../components/jobs')(React)
    var RedisHandler = require('../redis_handler')

    var UI = null;
    var jobs = []

    this.resourcePath = config.resourcePath

    this.redisHandler = new RedisHandler(this)

    this.mountInterface = function(el) {
      var $el = $(el).get(0);
      var jsx = <Jobs controller={this} jobs={jobs} category={category} />
      UI = this.UI = React.renderComponent(jsx, $el);
    }

    this.fetch = function(cb) {
      $.getJSON(this.resourcePath+'/'+category, function(data) {
        jobs = data.keys
        UI.setProps({ jobs: jobs })
      })
    }

    if (config.poll) {
      setInterval(this.fetch.bind(this), config.poll)
    }
  }
}
