class Player {
    constructor(){
        this.position = {
            x:100,
            y:100
        }
        this.velocity = 1;
        this.gravity = 1;
        this.width = 50;
        this.height = 50;
        this.bottom = this.position.y + this.height;

        }

        draw(){
            ctx.fillStyle = 'red';
            ctx.fillRect(this.position.x, this.position.y,this.width,this.height);
        }
        // update every frame
        update(){

            
            // updates position y and bottom every frame and adds velocity if bottom is less than height of canvas
            this.position.y = this.position.y + this.velocity;
            this.bottom = this.position.y + this.height;
            
            if (this.bottom < canvas.height){
                this.velocity += this.gravity;
            }
            else {
                this.velocity = 0;
            }    
        
        }        
}


