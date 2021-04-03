class Drop {

  constructor(x, y) {
      var options={
       restitution: 0,
       friction: 0.001
    };
    this.body = Bodies.circle(x, y, 10, options);
    World.add(world,this.body);
  }
  display(){
    push()
    var pos = this.body.position;
    translate(pos.x,pos.y)
    fill("blue");
    ellipse(this.x,this.y,10);
      
    
  }
   update(){
     if(this.body.position.y>height){
        Matter.Body.setPosition, (this.body,{x: random(0,400),
        y: random(0,400)
        });
      }
   }
}
