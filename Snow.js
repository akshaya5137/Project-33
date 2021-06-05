class Snow{
    constructor(x, y){
        var options={
            restitution:0,
            friction:1,
            density:1
        }
        this.body = Bodies.rectangle(x, y, 100, 100, options);
        this.width = 100;
        this.height = 100;
        this.image = loadImage("snow4.webp");
        World.add(world, this.body);
    }

    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, 100, 100);
        pop();
      }

      repeat(){
          if(this.body.position.y>650){
              Matter.Body.setPosition(this.body,{x:random(0,1000),y:random(-50,600)});
          }
      }
    }
