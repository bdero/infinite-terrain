const PointerLockControls = require('./engine/pointerlock.js');

const stats = require('./utils/stats'),
  _ = require('lodash'),
  renderer = require('./engine/renderer');

let scene, camera, controls;

function initialize() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(45, 16/9, 1, 10000);
  controls = new PointerLockControls(camera);


  const resizeMessage = _.throttle(
    () => console.log(
      `Renderer resized to ${window.innerWidth} x ${window.innerHeight}.`
    ), 500
  );
  function onWindowResize() {
    resizeMessage();
    camera.aspect = window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }
  onWindowResize();
  window.addEventListener('resize', onWindowResize, false);


  update();
}

function update () {
  requestAnimationFrame(update);

  renderer.render(scene, camera);

  stats.update();
}

initialize()
