// Your code here
class Polygon {
  constructor(arr) {
  this.arr=arr
  this.count=this.arr.length
  }
  get countSides(){
    return this.arr.length
  }
  get perimeter() {
    let sum = 0;
    for (var side of this.arr) {
      sum += side
    }
    return sum
  }
}
class Triangle extends Polygon {
  get isValid(){
      let side1=this.arr[0]
      let side2=this.arr[1]
      let side3=this.arr[2]
      return ((side1 + side2 > side3) && (side1 + side3 > side2)
       && (side2 + side3 > side1))
    }

  }

class Square extends Polygon{
  get isValid(){
    let side1=this.arr[0]
    let side2=this.arr[1]
    let side3=this.arr[2]
    let side4 = this.arr[3]
       return ((side1 === side2) && (side1 === side3)
       && (side1 === side4))
  }
  get area(){
      return this.arr[0] * this.arr[0]
  }
}
