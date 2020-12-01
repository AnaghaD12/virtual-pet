//Create variables here
var dog, hd, db, foodStock, dg
var food, backyardbg;
var bg, gardendog

function preload()
{
  //load images here
  dg = loadImage("images/dogImg.png")
  hd = loadImage("images/dogImg1.png")
  backyardbg= loadImage("images/grassbg.PNG");
  gardendog = loadImage("images/Garden.PNG")
}

function setup() {
  createCanvas(500, 500);
 bg = createSprite(250,250,500,500)
  dog = createSprite(250,300,50,50)
  dog.addImage(dg)
  dog.scale = .5
 food = new Food()
  db = firebase.database() 
  


}


function draw() {  
background(46,139,87)
food.feed.mousePressed(()=>{
  //food.foodStock = food.foodStock-1;
  food.writeStock(food.foodStock);
  dog.addImage(hd)
});

food.readStock()
food.refill.mousePressed(()=>{
  food.refillStock();
});
food.play.mousePressed(()=>{
  
  dog.addImage(gardendog)
  bg.addImage(backyardbg)
 // background(backyardbg)
  console.log("hi")

});

food.buy.mousePressed(()=>{
  food.money -= 10
  console.log("hi")
  food.writeMoney(food.money)
});
food.readMoney()


  drawSprites();
  //add styles here
  fill("black")
  //text("Press up arrow to feed your dog!",250,100);
  text(food.foodStock,250,150);
  text(food.money,400,20);

}



