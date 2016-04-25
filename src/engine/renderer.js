let container = document.createElement('div');
document.body.appendChild(container);

let renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.domElement.style.position = "relative";

container.appendChild(renderer.domElement);

renderer.gammaInput = true;
renderer.gammaOutput = true;

module.exports = renderer;
