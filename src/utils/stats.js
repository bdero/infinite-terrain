const Stats = require('stats.js'),
  $ = require('jquery');

const stats = new Stats();

stats.setMode(0);

$('body').append(stats.domElement);

module.exports = {
  begin: stats.begin,
  end: stats.end,
  update: stats.update
};
