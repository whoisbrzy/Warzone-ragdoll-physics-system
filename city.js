// Procedural Amsterdam Nieuw-West city expansion for Three.js.
export function addAmsterdamWestCity(scene, THREE) {
  const mat = (color, roughness = 0.88) => new THREE.MeshStandardMaterial({ color, roughness });
  const asphalt = mat(0x343a40), pavement = mat(0xb8b5aa), brick = mat(0x9c6655);
  const cream = mat(0xd1c3a8), concrete = mat(0xaaa99f), glass = mat(0x577987, 0.3);
  const dark = mat(0x33383b), white = mat(0xe9e3d5), green = mat(0x47764c);
  const metal = mat(0x424b50, 0.55), red = mat(0x9f443b), yellow = mat(0xd8b64e);
  function mesh(geometry, material, x, y, z, cast = true) {
    const o = new THREE.Mesh(geometry, material);
    o.position.set(x, y, z); o.castShadow = cast; o.receiveShadow = true;
    scene.add(o); return o;
  }
  function block(w, h, d, x, z, material) {
    mesh(new THREE.BoxGeometry(w, h, d), material, x, h / 2, z);
    mesh(new THREE.BoxGeometry(w + .7, .35, d + .7), dark, x, h + .16, z, false);
    const floors = Math.max(2, Math.floor((h - 2) / 3));
    for (let f = 0; f < floors; f++) for (let xx = -w / 2 + 2; xx < w / 2 - 1; xx += 3.4) {
      mesh(new THREE.BoxGeometry(1.45, 1.25, .1), glass, x + xx, 1.55 + f * 2.7, z - d / 2 - .06, false);
      mesh(new THREE.BoxGeometry(1.45, .09, .16), white, x + xx, .91 + f * 2.7, z - d / 2 - .1, false);
    }
    mesh(new THREE.BoxGeometry(w * .7, .65, .16), red, x, Math.min(h - 1, 4.1), z - d / 2 - .13, false);
  }
  function road(w, d, x, z) { mesh(new THREE.BoxGeometry(w, .12, d), asphalt, x, -.015, z, false); }
  function tree(x, z, scale = 1) {
    mesh(new THREE.CylinderGeometry(.22 * scale, .32 * scale, 2.6 * scale, 7), mat(0x72513b), x, 1.3 * scale, z);
    mesh(new THREE.SphereGeometry(1.45 * scale, 9, 7), green, x, 3.1 * scale, z);
  }
  function lamp(x, z) {
    mesh(new THREE.CylinderGeometry(.07, .1, 4.8, 7), metal, x, 2.4, z);
    mesh(new THREE.BoxGeometry(.8, .12, .18), metal, x + .28, 4.7, z);
    mesh(new THREE.BoxGeometry(.42, .16, .34), yellow, x + .62, 4.62, z, false);
  }
  function bench(x, z, rot = 0) {
    const g = new THREE.Group();
    const seat = new THREE.Mesh(new THREE.BoxGeometry(2, .14, .55), brick); seat.position.y = .55; g.add(seat);
    const back = new THREE.Mesh(new THREE.BoxGeometry(2, .75, .12), brick); back.position.set(0, .95, -.22); g.add(back);
    for (const xx of [-.72, .72]) { const leg = new THREE.Mesh(new THREE.BoxGeometry(.12, .55, .12), metal); leg.position.set(xx, .28, 0); g.add(leg); }
    g.position.set(x, 0, z); g.rotation.y = rot; scene.add(g);
  }
  for (const z of [-112, -62, 62, 112]) road(350, 10, 0, z);
  for (const x of [-112, -62, 62, 112]) road(10, 350, x, 0);
  for (const z of [-119, -55, 55, 119]) {
    mesh(new THREE.BoxGeometry(350, .18, 2.5), pavement, 0, .04, z, false);
    mesh(new THREE.BoxGeometry(350, .04, 1.1), mat(0x527b70), 0, .15, z + (z < 0 ? 2 : -2), false);
  }
  road(350, 7, 0, -88);
  for (const x of [-165, 165]) mesh(new THREE.CylinderGeometry(.055, .055, 7, 6), metal, x, 3.5, -88);
  for (const z of [-89.3, -86.7]) mesh(new THREE.BoxGeometry(350, .13, .16), metal, 0, .18, z, false);
  for (let x = -165; x <= 165; x += 7) mesh(new THREE.BoxGeometry(.35, .1, 4.2), mat(0x665e51), x, .12, -88, false);
  const rows = [
    [-88,-145,34,27,18,cream],[-30,-145,38,27,22,brick],[32,-145,38,27,19,concrete],[91,-145,40,27,24,cream],
    [-88,145,34,27,21,concrete],[-30,145,38,27,18,cream],[32,145,38,27,23,brick],[91,145,40,27,20,cream],
    [-145,-30,27,40,20,brick],[-145,32,27,40,23,cream],[145,-30,27,40,22,concrete],[145,32,27,40,19,brick],
    [-88,0,30,24,13,cream],[88,0,30,24,15,concrete]
  ];
  for (const [x,z,w,d,h,m] of rows) block(w,h,d,x,z,m);
  for (let i = 0; i < 7; i++) {
    const x = -36 + i * 12;
    mesh(new THREE.BoxGeometry(10.5,5.4,8), i % 2 ? cream : concrete, x,2.7,-43);
    mesh(new THREE.BoxGeometry(7.6,2.5,.14),glass,x,1.8,-38.9,false);
    mesh(new THREE.BoxGeometry(8.2,.42,.4),i % 2 ? red : yellow,x,3.5,-38.7,false);
  }
  mesh(new THREE.BoxGeometry(78,.16,48),pavement,0,.02,0,false);
  for (const [x,z] of [[-29,-17],[29,-17],[-29,17],[29,17]]) {
    mesh(new THREE.BoxGeometry(11,.3,8),green,x,.18,z,false);
    for (const dx of [-3,3]) tree(x+dx,z,.65);
  }
  bench(-8,18,0); bench(8,18,Math.PI); bench(-42,2,Math.PI/2);
  for (let x=-19;x<=19;x+=4) {
    mesh(new THREE.TorusGeometry(.55,.075,6,12),metal,x,.7,25);
    mesh(new THREE.BoxGeometry(.14,.7,.14),metal,x-.5,.35,25);
    mesh(new THREE.BoxGeometry(.14,.7,.14),metal,x+.5,.35,25);
  }
  for (let x=-155;x<=155;x+=31) { lamp(x,-51); lamp(x,51); }
  for (let x=-170;x<=170;x+=28) { tree(x,-126,.9); tree(x,126,.9); }
  for (let z=-165;z<=165;z+=30) { tree(-126,z,.85); tree(126,z,.85); }
  mesh(new THREE.BoxGeometry(18,.24,210),mat(0x397d91,.25),-190,.02,0,false);
  mesh(new THREE.BoxGeometry(25,.55,8),pavement,-190,.38,-55);
  mesh(new THREE.BoxGeometry(25,.55,8),pavement,-190,.38,55);
  for (const z of [-18,18]) {
    mesh(new THREE.BoxGeometry(7,.25,1.1),dark,-190,.8,z);
    for (const x of [-193,-187]) mesh(new THREE.BoxGeometry(.12,.8,.12),metal,x,1.2,z);
  }
}
