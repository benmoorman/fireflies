let fireflies = [];

function setup() {
  createCanvas(720, 400);

  for (let i = 0; i < 250; i += 1) {
    fireflies.push(new Firefly());
  }

  for (let i = 0; i < 1000; i++) {
    draw();
  }
}

function draw() {
  background('#0f0f0f');
  for (let i = 0; i < fireflies.length; i++) {
    fireflies[i].createFirefly();
    // fireflies[i].moveFirefly();
  }
}
