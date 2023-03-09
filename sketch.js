if(prompt("Press 1 to get tutorial, or enter to play")==1){
  alert("The colonies had just been established. However, England was determined to profit off them.")
  alert("The all of the other 12 colonies tried, but alas, they could not beat England.")
  alert("England sent out taxes left and right.")
  alert("However, you have a weapon: A cheeseburger.")
  alert("In the top left of your screen, you will see England's health, and on the right, your money.")
  alert("If England touches you, you lose. If a tax touches you, England gets all it's health back and you lose some money.")
  alert("When the tax touches you, some of your money is sent off to England in the form of a gold coin.")
  alert("As soon as the coin leaves you, you will lose a random amount of money. When it touches England, Englands gets it health back.")
  alert("You can also lose if you run out of money.")
  alert("You can use WASD to move and space to shoot in the direction of your mouse.")
  alert("Remember, you are Virginia, and you are the only hope.")
  alert("Go, Virginia!")
}



//How many less enemies to spawn naturally
var NERFAMOUNT = 0

//How long to wait before summoning enemies again (ms)
var timeToStop = 10000

//The number of enemies to spawn on the boss
var EnemyNumOnBoss = 8

//How long the boss is at it's max speed
var timeAtFastSpeed = 30000

//How much money you start with
var money = 10000

//Max amount of money you can lose when you touch tax (Random between 0 and upToAmount)
var upToAmount = 3000

document.getElementById("money").innerHTML = "$"+money
var enemyAmount = 1
var varlock9 = 0
var varlock10 = 0
var currentClick = 'no'
var stop11 = false
var tut = false
var WinCondition124 = prompt("Choose the difficulty. 1 for easy, 2 for medium, 3 for hard, 4 for apocalypse, and 5 for Ultra Nightmare")
if(WinCondition124 == "credits" || WinCondition124 == "Credits"){
  alert("yay u found a secret code")
  var stop11 = true
        window.location.reload();
}
else{
  WinCondition124 = Number(WinCondition124) * 6
}

if (stop11 == true){
 
}
else{
var canvasWidth = screen.width;
var canvasHeight = screen.height/1.08;
var WCH = WinCondition124 - 2
var player = 0;
var playerX = 300;
var playerY = 100;
var sprWidth = 64;
var sprHeight = 64;
var speed = 4;
var georgehealth = WinCondition124*3
var projectileq = 0;

var ghost = 0;
var ghostX = 50;
var ghostY = 100;
var Play_button;

var projectiles;

var direction = 90;
var GhostMaxSpeed = 3;
var score = 0;
function howeBorn1(){
   var howeBorn = prompt("Question 1")
  if(howeBorn == "1"){
  }  
else if(howeBorn == null){
  window.stop();
}
  else{
      alert("Sorry, wrong answer! Make sure you type only the number, nothing else")
      howeBorn1();
    }
}
function secondInCommand(){
   var SIC = prompt("Question 2")
  if(SIC == "2"){
  }
else if(SIC == null){
  window.stop();
}
  else{
      alert("Sorry, wrong answer! Make sure you type only the name and use capitals.")
      secondInCommand();
    }
}
function truefalseturn(){
     var TFT = prompt("Question 3")
  if(TFT == "3"){
  }
else if(TFT == null){
  window.stop();
}
  else{
      alert("Sorry, wrong answer! Make sure you type only yes or no.")
      truefalseturn();
}
}
function fortticonder(){
     var ticon = prompt("Question 4")
  if(ticon == "4"){
  }
else if(ticon == null){
  window.stop();
}
  else{
      alert("Sorry, wrong answer! Make sure you type Fort _____ with capitals and the word 'Fort'. Also check your spelling!")
      fortticonder();
}
}
if(WinCondition124/6 == 744){
  WinCondition124 = 7
  WCH = 5
  georgehealth = 7*3
  tut = true
}
else{
if (WinCondition124/6 > 5 || isNaN(WinCondition124)){
  alert("Sorry, you must chose 1, 2, 3, 4, or 5.")
    window.stop();
}
}
//Easy
if (WinCondition124 == 6){
  howeBorn1();
  GhostMaxSpeed = 1.25
  timeToStop = 15000
  EnemyNumOnBoss = 6
  money = 12500
  upToAmount = 2000
}
//Medium
if (WinCondition124 == 12){
  truefalseturn();
  NERFAMOUNT = 1
  timeToStop = 10000
  EnemyNumOnBoss = 8
}
//Hard
if (WinCondition124 == 18){
  GhostMaxSpeed = 3;
  secondInCommand();
  NERFAMOUNT = 3
  timeToStop = 7000
  EnemyNumOnBoss = 10
  upToAmount = 5000
}
//Apocolypse
if (WinCondition124 == 24){
  GhostMaxSpeed = 3.5
  fortticonder();
  NERFAMOUNT = 7
  timeToStop = 5500
  EnemyNumOnBoss = 12
  money= 7000
  upToAmount= 8000
}

//Ultra Nightmare
if (WinCondition124 == 30){
  GhostMaxSpeed = 3.9
  NERFAMOUNT = 1
  EnemyNumOnBoss = 15
  money = 5000
  timeToStop = 3000
  upToAmount = 10000

}
document.getElementById("money").innerHTML = "$"+money
if(WinCondition124 == 0){
  window.location.reload()
}
function preload() {
  playerImg = loadImage("images/player.png");
  ghostImg = loadImage("images/ghost.png");
  bgImg = loadImage("images/First Level.png");
  projectileImg = loadImage("images/projectile.png");
  projectileqImg = loadImage("images/projectileq.png")
}
function setup() {
  createCanvas(canvasWidth, canvasHeight);
  player = createSprite(playerX, playerY, sprWidth, sprHeight);
  player.addImage(playerImg, "images/player.png");
  ghost = createSprite(ghostX, ghostY, sprWidth, sprHeight);
  ghost.addImage(ghostImg, "images/ghost.png");
  
  enemy = new Group();
  coin = new Group();
  projectiles = new Group();
  
  player.setCollider("rectangle", 0, 0, 64, 45);
  ghost.setCollider("rectangle", 0, 0, 96, 69);
  for (var i = 0; i < WCH-NERFAMOUNT; i++) {
    var ang = random(330);
    var px = canvasWidth/2 + 10000 * ang;
    var py = canvasHeight/2 + 10000 * ang;
    createEnemy(px,py);
  }
  document.getElementById("greeting").innerHTML ="England's health is "+georgehealth+". England has taken "+(WinCondition124*3-georgehealth)+" damage so far, and you still have "+(enemyAmount-(score+1))+" taxes left to defeat.";}

function playerControls() {
  if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
      player.position.x += speed;
    
    if (player.position.x + sprWidth/2 > canvasWidth) {
      player.position.x = canvasWidth - sprWidth/2;
    }
    
  } if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
    player.position.x -= speed;
    
    if (player.position.x < 0 + sprWidth/2) {
      player.position.x = 0 + sprWidth/2;
    }
    
  } if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) {
    player.position.y += speed;
    
    if (player.position.y + sprHeight/2 > canvasHeight) {
      player.position.y = canvasHeight - sprHeight/2;
    }
    
  } if (keyIsDown(UP_ARROW) || keyIsDown(87)) {
    player.position.y -= speed;
    
    if (player.position.y < 0 + sprHeight/2) {
      player.position.y = 0 + sprHeight/2;
    }
    
    } 
  if (keyIsDown(32)) {
    clickSpace()
    
    } 
}

function destroyOther (destroyed, projectile) {
  destroyed.remove();
  projectiles.remove(projectile);
  projectile.remove();
  destroyed.setCollider("rectangle", 0, 9999, 75, 75);
  score++;
}
function destroyOther1 (destroyed, projectile) {
  projectiles.remove(projectile);
  projectile.remove()
}

function destroyOther2(destroyed, newEnemy){
  enemy.remove(newEnemy)
  newEnemy.remove();
  score++
  TaxTouch()
}

function destroyOther3(destroyed, newCoin){
  coin.remove(newCoin)
  newCoin.remove()
  georgehealth = WinCondition124*3
  document.getElementById("greeting").innerHTML ="England's health is "+georgehealth+". England has taken "+(WinCondition124*3-georgehealth)+" damage so far, and you still have "+(enemyAmount-(score+1))+" taxes left to defeat.";}

function gameOver() {
  alert("GAME OVER");
  player.remove()
  window.location.reload();
}
document.onmousedown = click
document.addEventListener('keyup', (event) => {
 const keyName = event.key;
 if(keyName==' '){
   currentClick = 'no'
 }
});
function clickSpace(){
  if(currentClick == 'no'){
    click()
    currentClick = 'yes'
  }
}

function click() {
 if(mouseX - player.position.x > 0){
  var projectile = createSprite(player.position.x, player.position.y);
  projectile.addImage(projectileImg);
  projectile.attractionPoint(10+speed, mouseX, mouseY);
  projectile.setCollider("rectangle", 0, 0, 19, 32);
  projectiles.add(projectile);
}
  
 if(mouseX - player.position.x < 0){
  var projectileq = createSprite(player.position.x, player.position.y);
  projectileq.addImage(projectileqImg);
  projectileq.attractionPoint(10+speed, mouseX, mouseY);
  projectileq.setCollider("rectangle", 0, 0, 19, 32);
  projectiles.add(projectileq);
}
}
function gdie(){
if (tut == false){
  var gdie1 = prompt("Question_On_Death_Of_Boss5")
  if(gdie1 == "5"){
    
  }
    else{
      alert("Sorry, wrong answer! Make sure you type only the name and use capitals. Also check your spelling.")
      gdie();
}
}
}
function loseHealth(){
  georgehealth = georgehealth -1
  document.getElementById("greeting").innerHTML ="England's health is "+georgehealth+". England has taken "+(WinCondition124*3-georgehealth)+" damage so far, and you still have "+(enemyAmount-(score+1))+" taxes left to defeat.";
  if(georgehealth < 1){
  varlock9 = 1
  ghost.setCollider("rectangle", 0, 9999, 75, 75);
  document.getElementById("greeting").innerHTML ="Congratulations! You have defeated England!";
  ghost.remove()
  score = score+1
      gdie();
}
}

function getHealth(){
  georgehealth = WinCondition124*3
  document.getElementById("greeting").innerHTML ="England's health is "+georgehealth+". England has taken "+(WinCondition124*3-georgehealth)+" damage so far, and you still have "+(enemyAmount-(score+1))+" taxes left to defeat.";
}

function TaxTouch() {
  //Sets boss health to max and takes money
  if (varlock9 == 0){
    createCoin(player.position.x, player.position.y)
    money=money-Math.floor(random(upToAmount))
      if (money<1){
        gameOver()
      }
      document.getElementById("money").innerHTML = "$"+money
  }
  else{
     money=money-Math.floor(random(upToAmount))
      if (money<1){
        gameOver()
      }
      document.getElementById("money").innerHTML = "$"+money
  }
} 
function createEnemy(x,y) {
  var newEnemy = createSprite(x,y);
  var attackImg = loadImage("images/enemy.png");
  newEnemy.addImage(attackImg);
  newEnemy.setSpeed(2.5, random(360));
  newEnemy.setCollider("rectangle", 0, 0, 60, 36);
  enemy.add(newEnemy);
  enemyAmount++;
}

function createCoin(x,y) {
  var newCoin = createSprite(x,y);
  var travelImg = loadImage("images/coin.png");
  newCoin.addImage(travelImg);
  newCoin.attractionPoint(5, ghost.position.x, ghost.position.y)
  newCoin.setCollider("rectangle", 0, 0, 1, 1);
  coin.add(newCoin)
}

function collisions() {
  enemy.overlap(projectiles, destroyOther);
  
  ghost.overlap(projectiles, loseHealth);
  ghost.overlap(projectiles, destroyOther1);
  ghost.overlap(coin, destroyOther3)

  player.overlap(enemy, destroyOther2);
  player.overlap(ghost, gameOver);


}

function spawnEnemyOnBoss(){
  if(varlock9==0){
    for (var i = 0; i < EnemyNumOnBoss; i++) {
      createEnemy(ghost.position.x,ghost.position.y)
    }
    document.getElementById("greeting").innerHTML ="England's health is "+georgehealth+". England has taken "+(WinCondition124*3-georgehealth)+" damage so far, and you still have "+(enemyAmount-(score+1))+" taxes left to defeat.";
    varlock10=0
  }
}

function wowhelper(){
  if (varlock9==0){
    if (varlock10==0){
      varlock10=1
      setTimeout(function(){
        spawnEnemyOnBoss();
        varlock10=0;
      },timeToStop)
    }
  }
}

function draw() {
       if (score == enemyAmount) {
         if(WinCondition124/6 == 1){
           secondInCommand();
         }
         if(WinCondition124/6 == 2){
           howeBorn1();
         }
         if(WinCondition124/6 == 3){
          fortticonder();
         }
         if(WinCondition124/6 == 4){
           truefalseturn();
         }
         
         alert("You Win! You defeated "+(score-1)+" taxes and England! You still have $"+money);
    score = 0; 
     window.location.reload();
   }  
  background(bgImg);
  playerControls();
  collisions();
  ghost.attractionPoint(0.2, player.position.x, player.position.y);
  ghost.maxSpeed = GhostMaxSpeed;
  for (var i = 0; i < enemy.length; i++) {
    var s = enemy[i];
    if(s.position.x<-40) s.position.x = canvasWidth+40;
    if(s.position.x>canvasWidth+40) s.position.x = -40;
    if(s.position.y<-40) s.position.y = canvasHeight+40;
    if(s.position.y>canvasHeight+40) s.position.y = -40;
  }
  
  drawSprites();
  
  playerImg.resize(64,45)
  if(WinCondition124 == 0 || WinCondition124 == null){
    window.stop();
  }
  wowhelper()
}
}
