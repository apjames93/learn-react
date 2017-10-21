'use strict';

console.log('its alive');

// JSX - JavaScript XML
var template = React.createElement(
  'h1',
  null,
  'Indecision App'
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
