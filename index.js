// Your code here
class Polygon{
  constructor(arr){
    this.arr=arr;
  }
  
  get countSides(){
    return  this.arr.reduce((acc,cur,ind)=>ind+1,0)
  }
  
  get perimeter(){
    return this.arr.reduce((acc,cur)=>acc+cur);
  }
  
}

class Triangle extends Polygon{
  get isValid(){
    return ((this.arr[0]+this.arr[1]>this.arr[2]) && (this.arr[0]+this.arr[2]>this.arr[1]) && (this.arr[1]+this.arr[2]>this.arr[0]) )
  }
}

class Square extends Polygon{
  get isValid(){
    return((this.arr[0]===this.arr[1]) &&(this.arr[1]===this.arr[2]) && (this.arr[2]===this.arr[3]));
  }
  get area(){
    return this.arr[0]*this.arr[0];
  }
}