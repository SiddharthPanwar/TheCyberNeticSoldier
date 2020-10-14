class Rope{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            bodyB : bodyB,
            stiffness: 1.0,
            length: 0
        }
        
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }
    

    display(){
        
            var pointA = this.rope.bodyA.position;
            var pointB = this.rope.bodyB.position;
            push();
            
            stroke(48,22,8);
            
                strokeWeight(7);
                line(pointA.x, pointA.y, pointB.x , pointB.y);
                
            pop();
        }
    }
    
