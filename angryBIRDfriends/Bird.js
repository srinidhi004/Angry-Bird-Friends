class Bird extends Base {
    constructor(x,y){
      super(x,y,75,75);
      this.image = loadImage("images/sri.png");
      this.smokeimage= loadImage("images/smoke.png");
      this.trajectory =[];
    }
  
    display() {
     //this.body.position.x = mouseX;
    // this.body.position.y = mouseY;

      
  
      super.display();
  
      if(this.body.velocity.x > 10 && this.body.position.x > 200){
        var position = [this.body.position.x, this.body.position.y];
        this.trajectory.push(position);
      }
     
  
      for(var i=0; i<this.trajectory.length; i++){
        image(this.smokeimage, this.trajectory[i][0], this.trajectory[i][1]);
      }
    }
  }
  