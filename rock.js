class Rock {
  constructor(x, y, width, height) {
    var options = {
      restitution: 0.8,
      friction: 1.0,
      density: 1.0,
    };

    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    Matter.Body.setAngle(this.body, this.body.angle);
    World.add(world, this.body);
  }

  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    angleMode(RADIANS);
    rotate(angle);
    rectMode(CENTER);
    fill("#ff0000");
    rect(0, 0, this.width, this.height);
    pop();
  }
}
