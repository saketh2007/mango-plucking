class Tree
{
    constructor()
    {
        var options={
            isStatic:true,
           
        }
        this.body=Bodies.rectangle(1076,202,200,250,options)
        World.add(world,this.body)
        this.image=loadImage("tree.png")

    }

    display()
    {
        
        image(this.image,750,50,550,650)
    }
}
