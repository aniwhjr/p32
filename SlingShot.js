class SlingShot {
  constructor(bodyA, pointB) {
    var options = {
      bodyA: bodyA,
      pointB: pointB,
      stiffness: 0.04,
      length: 10,
    };

    this.SlingShot = Constraint.create(options);
    this.pointB = pointB;
    World.add(world, this.SlingShot);
  }

  fly() {
    this.SlingShot.bodyA = null;
  }

  attach(bodyA) {
    this.SlingShot.bodyA = bodyA;
  }

  display() {
    if (this.SlingShot.bodyA) {
      var pointA = this.SlingShot.bodyA.position;
      var pointB = this.pointB;
      strokeWeight(4);
      line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
  }
}
