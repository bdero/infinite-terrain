let stats = require('./utils/stats'),
  _ = require('lodash');

function initialize() {
  let container = document.createElement('div');
  document.body.appendChild(container);

  let renderer = new THREE.WebGLRenderer({antialias: true});
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.domElement.style.position = "relative";

  container.appendChild(renderer.domElement);

  renderer.gammaInput = true
  renderer.gammaOutput = true

  let resizeMessage = _.throttle(
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
