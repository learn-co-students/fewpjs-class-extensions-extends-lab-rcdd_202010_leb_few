// Your code here
class Polygon{
  constructor(array=[]){
    this.array=array;
  }

 get countSides(){
  return this.array.length;
}

get perimeter(){
  let p = 0;
  for(let i=0;i<this.array.length;i++){
    p+=this.array[i];
  }
  return p;
}
}

class Triangle extends Polygon{
  get isValid(){
    if(this.array[0]<this.array[1]+this.array[2]){
      return true;
   }else{
      return false;
   }
  }
}

class Square extends Polygon{
  get isValid(){
if(this.array[0]===this.array[1] && this.array[0]===this.array[2] && this.array[0]===this.array[3]){
  return true;
  }
  else{
  return false;
  }
  }

  get area(){
    return this.array[0]**2;
  }
}
