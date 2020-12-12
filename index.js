class Polygon {
  constructor(arr){
    this.arr = arr;
  }
  get countSides() {
    return this.arr.length;
  }
  get perimeter(){
    return this.arr.reduce((acc, val) => {return acc + val});
  }
}

class Triangle extends Polygon{
  get isValid(){
    for(let i=0; i<this.arr.length;i++){
      if(this.arr[i]<(this.arr[i+1]+this.arr[i+2])){
        return true;
      }
        return false;
    }
  }
}

class Square extends Polygon{
  get isValid(){
    return this.arr.every(val => val === this.arr[0]);
  }
  get area(){
    if(this.arr.every(val => val === this.arr[0])===true){
      return this.arr[0]*this.arr[0];
    }
  }
}