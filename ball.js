class        {
    constructor(x,y,width,height){
     
      this.body = Bodies.circle(x,y,width,height)
      this.width = width
      this.height = height
    
      World.add(world, this.body)
    }
    display(){
        var pos = this.body.position
        
          push()
          pop()
          
    }
  }