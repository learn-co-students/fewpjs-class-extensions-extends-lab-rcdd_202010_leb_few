// Your code here
class Polygon {
  constructor(sides) {
    this.sides = sides
    this.count = this.sides.length
  }

  get countSides() {
    return this.sides.length
  }
  
  get perimeter (){
    return this.sides.reduce((acc,i)=> acc+i,0) 
  }
}

class Triangle extends Polygon{
  get isValid (){
    let x=false;
    if(this.count===3){
      if(this.sides[0]+this.sides[1]>=this.sides[2] &&
      this.sides[1]+this.sides[2]>=this.sides[0] &&
      this.sides[0]+this.sides[2]>=this.sides[1])
    {x=true;}
    }
        return x
  }
}

class Square extends Polygon{
 get isValid (){
    let x=false;
    if(this.count===4){
      if(this.sides[0]===this.sides[1] &&
      this.sides[1]===this.sides[2] &&
      this.sides[2]===this.sides[3]
      )
      {x= true;}
    }
    return x
  }
    get area() {
    if (this.count !== 4) return;
    return this.sides[0] * this.sides[0]
  }
}



