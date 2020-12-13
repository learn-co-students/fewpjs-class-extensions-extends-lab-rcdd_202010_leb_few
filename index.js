class Polygon {
  constructor(sides) {
    this.sides = sides
    this.count = this.sides.length
  }

  get countSides() {
    return this.sides.length
  }

  get perimeter() {
   return this.sides.reduce((acc, val) => acc + val)
  }
}

class Triangle extends Polygon {
  get isValid() {
    if (this.count !== 3) return;
    const [side1, side2, side3] = this.sides
    return ((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1))
  }
}

class Square extends Polygon {
  get isValid() {
    if (this.count !== 4) return;
    const [side1, side2, side3, side4] = this.sides
    return ((side1 === side2) && (side1 === side3) && (side1 === side4))
  }

  get area() {
    if (this.count !== 4) return;
    return this.sides[0] * this.sides[0]
  }
}