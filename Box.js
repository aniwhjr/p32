class Box {
  constructor(x, y, width, height) {
    var options = {
      isStatic: false,
      restitution: 0.8,
      friction: 0.3,
      density: 1.0,
    };

    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    Matter.Body.setAngle(this.body, this.body.angle);
    World.add(world, this.body);
  }

  display() {
    if (this.body.speed < 3) {
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      angleMode(RADIANS);
      rotate(angle);
      rectMode(CENTER);
      fill("#00acee");
      rect(0, 0, this.width, this.height);
      pop();
    } else {
      World.remove(world, this.body);
      push();

      this.Visiblity -= 5;
      tint(255, this.Visiblity);

      pop();
    }
  }
}
