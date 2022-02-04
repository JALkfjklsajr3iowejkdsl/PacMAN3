/*
Pacman
La idea principal
 de nuestro personaje principal 
 es recorreor un laberinto mostrando en pantalla
  lo cual debemos consumir los puntitos que se encuentran alrededor del mapa,
   he irnos cuidando de los enemigos que se encuentran dianbulando por todo el mapa,
   y si tenemos la mala suerte de que nos agarren perdemos una vida(tienes 3 vidas)
*/
var p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11;
function setup(){
    createCanvas(windowWidth,windowHeight);
    p1=createSprite(390,600,20,200);
    p2=createSprite(20,35,30,250);
    p3=createSprite(120,40,20,100);
    p4=createSprite(300,90,20,200);
    p5=createSprite(100,150,20,50);
    p6=createSprite(70,190,20,200);
    p7=createSprite(89,400,20,200);
    p8=createSprite(170,230,20,200);
    p9=createSprite(450,300,20,200);
    p10=createSprite(568,500,20,200);
    p11=createSprite(400,400,100,400);


}

function draw(){
    background("black"); drawSprites();
}