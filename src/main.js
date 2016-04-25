var stats = require('./utils/stats');

var renderer;

function initialize() {
  var container = document.createElement('div');
  document.body.appendChild(container);

  renderer = new THREE.WebGLRenderer({antialias: true});
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.domElement.style.position = "relative";

  container.appendChild(renderer.domElement);

  renderer.gammaInput = true
  renderer.gammaOutput = true

  window.addEventListener('resize', onWindowResize, false);

  update();
}

function update () {
  requestAnimationFrame(update);

  stats.update();
}

function onWindowResize() {
  var w = window.innerWidth;
  var h = window.innerHeight;
  console.log(`Resizing renderer to ${w} x ${h}.`)
  renderer.setSize(window.innerWidth, window.innerHeight);
}

initialize()
