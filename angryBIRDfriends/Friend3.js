class Friend3 extends Base {
    constructor(x, y){
      super(x,y,75,75);
      this.image= loadImage("images/siv.png")
      this.Visiblity = 255;
    }
  
   display(){
     //console.log(this.body.speed);
     if(this.body.speed < 3){
      super.display();
     }
     else{
       World.remove(world, this.body);
       push();
       this.Visiblity = this.Visiblity - 5;
       tint(255,this.Visiblity);
       image(this.image, this.body.position.x, this.body.position.y, 50, 50);
       pop();
     }
     
   }
   score(){
     if(this.visibility<0 && this.visibility>-1005){
       score++;
     }
   }
  
  
  };