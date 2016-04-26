const stats = require('./utils/stats'),
  _ = require('lodash'),
  renderer = require('./engine/renderer');

function initialize() {
  const resizeMessage = _.throttle(
    () => console.log(
      `Renderer resized to ${window.innerWidth} x ${window.innerHeight}.`
    ), 500
  );
  function onWindowResize() {
    resizeMessage();

    renderer.setSize(window.innerWidth, window.innerHeight);
  }

  window.addEventListener('resize', onWindowResize, false);

  update();
}

function update () {
  requestAnimationFrame(update);

  stats.update();
}

initialize()
