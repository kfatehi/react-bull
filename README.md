react-bull
==========

React components & frontend code for bull job queue, based heavily on [Matador](https://github.com/ShaneK/Matador)

Designed to consume the API of [express-bull](https://github.com/keyvanfatehi/express-bull)

## Requirements

* Browserify & [reactify](https://www.npmjs.org/package/reactify)
* jQuery as supplied by you
* The scripts in vendor

## Usage

`npm install --save react-bull`

### Markup

```html
<div class='jobs' data-category='wait'></div>
<div class='jobs' data-category='active'></div>
<div class='jobs' data-category='failed'></div>
<div class='jobs' data-category='complete'></div>
<script src="//cdnjs.cloudflare.com/ajax/libs/react/0.11.2/react.js"></script>
<script src="//code.jquery.com/jquery-1.11.0.min.js"></script>
<script src="/vendor/jquery.noty.js"></script>
<script src="/vendor/jquery.blockUI.js"></script>
<script src="/bundle.js"></script>
```


### Script

```js
var ReactBull = require('react-bull')(React)

$(function(){
  $('.jobs[data-category]').each(function(i, el) {
    var category = $(el).data('category')
    var jobs = new ReactBull.JobsController(category, {
      resourcePath: '/api/v1/jobs',
      poll: 5000 // optional
    });
    jobs.mountInterface(el);
  })
})
```
