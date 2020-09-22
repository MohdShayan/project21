var bullet1,bullet2;
var wall1,wall2;
var thickness1,thickness2;
var lane1,lane2,lane3;
var speed1,speed2,weight;

function setup() {
 createCanvas(1600,400); 

 speed1=random(223,321);
 speed2=random(223,321);
 
 
 thickness1 =random(22,83);
 thickness2 =random(22,83);
 

 
 weight=random(30,52); 

 bullet1 =createSprite(50, 125, 33, 8);
 bullet1.velocityX=speed1;
 bullet1.shapeColor=color("white");

 bullet2 =createSprite(50, 275, 33, 8);
 bullet2.velocityX=speed2;
 bullet2.shapeColor=color("white");

 wall1=createSprite(1200,125,thickness1,120);
 wall1.shapeColor=color(80,80,80);


 wall2=createSprite(1200,275,thickness2,120);
 wall2.shapeColor=color(80,80,80);


 lane1=createSprite(0,50,2400,10);
 lane1.shapeColor=color("yellow")

 lane2=createSprite(0,200,2400,10);
 lane2.shapeColor=color("yellow")

 lane3=createSprite(0,350,2400,10);
 lane3.shapeColor=color("yellow")




}

function draw(){
  background(0,0,0); 

   if (HasCollided(bullet1,wall1)) {
       bullet1.velocityX=0;
       bullet1.collide(wall1);
       var damage1=0.5*weight*speed1*speed1/(thickness1*thickness1*thickness1)
       if (damage1>10) {
       wall1.shapeColor=color(255,0,0);
       }
       if (damage1<10) {
       wall1.shapeColor=color(0,255,0);
       }
      }

      if (HasCollided(bullet2,wall2)) {
        bullet2.velocityX=0;
        bullet2.collide(wall2);
        var damage2=0.5*weight*speed1*speed1/(thickness2*thickness2*thickness2)
        if (damage2>10) {
        wall2.shapeColor=color(255,0,0);
        }
        if (damage2<10) {
        wall2.shapeColor=color(0,255,0);
        }
       }
 
       drawSprites();
        

    }
    function HasCollided(lbullet,lwall){
      bulletRightEdge =lbullet.x + lbullet.width;
        wallLeftEdge =lwall.x;
       if (bulletRightEdge >=wallLeftEdge)
         { 
          return true
         }
         return false;
        }
