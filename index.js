// Your code here
class Polygon{
  constructor(arr){
    this.arr=arr
  }
  get countSides(){ return this.arr.length
}
get perimeter(){
  let sum=0
  for (let count of this.arr){
    sum+=count
}
  return sum
}
}
class Triangle extends Polygon{
  get isValid(){
    
    return ( (this.arr[0]+this.arr[1]>this.arr[2]) &&(this.arr[0]+this.arr[2]>this.arr[2]) &&(this.arr[1]+this.arr[2]>this.arr[0]))
    }
  }
class Square extends Polygon{
  get isValid(){
    if(this.arr[0] === this.arr[1] && this.arr[1] === this.arr [2]&& this.arr[2] === this.arr[3])
    return true
    else return false}
  get area(){
    return this.arr[0]*this.arr[1]
  }
}