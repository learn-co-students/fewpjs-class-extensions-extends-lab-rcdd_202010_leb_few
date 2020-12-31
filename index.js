// Your code here
class Polygon {
  constructor(array){
    this.array=array;
  }
  get countSides(){
    return this.array.length;
  }
  get perimeter(){
    let sum=0;
    for(let i=0; i<this.array.length; i++)
    sum+=this.array[i];
    return sum;
  }
}

class Triangle extends Polygon{
  get isValid(){
    let valid=false;
    if(this.array[0]+this.array[1]<this.array[2])
    return valid;
    if(this.array[0]+this.array[2]<this.array[1])
    return valid;
    if(this.array[2]+this.array[1]<this.array[0])
    return valid;
    valid=true;
    return valid;
    }
  }
class Square extends Polygon{
  get isValid(){
    let valid=true;
    let side1=this.array[0];
    let side2=this.array[1];
    
    let side3=this.array[2];
    let side4=this.array[3];
    if(side1==side2&&side2==side3&&side3==side4)
    return valid;
    valid=false;
    return valid;
  }
  get area(){
    return this.array[0]*this.array[0];
  }
}
