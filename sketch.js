var currentClick = 'no'
var stop11 = false
var tut = false
var WinCondition124 = prompt("Choose the difficulty. 1 for easy, 2 for medium, 3 for hard, and 4 for apocalypse. Type 'Credits' for the credits.")
if(WinCondition124 == "credits" || WinCondition124 == "Credits"){
      alert("Code by Connor W")
    alert("American flag: “American Flag.” Pixelartmaker.com, 2016, pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/08054dd88bee517.png. Accessed 4 June 2022.")
    alert("Crown: “Crown.” Pixelartmaker.com, 2018, pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/206a2dad1a22f34.png. Accessed 4 June 2022.")
    alert("Bullet designed by Asher W.")
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
var canvasHeight = 480;
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
if (WinCondition124/6 > 4 || isNaN(WinCondition124)){
  alert("Sorry, you must chose 1, 2, 3, or 4.")
    window.stop();
}
}
if (WinCondition124 == 2*6 || WinCondition124 == 6){
  GhostMaxSpeed = 2;
}
if (WinCondition124 == 6){
  howeBorn1();
  GhostMaxSpeed = 1.25
}
if (WinCondition124 == 12){
  truefalseturn();
}
if (WinCondition124 == 3*6){
  GhostMaxSpeed = 3;
  secondInCommand();
}
if (WinCondition124 == 4*6){
  GhostMaxSpeed = 3.5
  fortticonder();
}
if(WinCondition124 == 0){
  window.stop()
}
function preload() {
  playerImg = loadImage("images/player.gif");
  ghostImg = loadImage("images/ghost.png");
  bgImg = loadImage("images/First Level.png");
  projectileImg = loadImage("images/projectile.png");
  projectileqImg = loadImage("images/projectileq.png")
}
function setup() {
  createCanvas(screen.width, canvasHeight);
  player = createSprite(playerX, playerY, sprWidth, sprHeight);
  player.addImage(playerImg, "images/player.gif");
  ghost = createSprite(ghostX, ghostY, sprWidth, sprHeight);
  ghost.addImage(ghostImg, "images/ghost.png");
  
  enemy = new Group();
  
  projectiles = new Group();
  
  player.setCollider("rectangle", 0, 0, 64, 45);
  ghost.setCollider("rectangle", 0, 0, 18*4, 4*23);
  for (var i = 0; i < WCH; i++) {
    var ang = random(360);
    var px = canvasWidth/2 + 10000 * ang;
    var py = canvasHeight/2 + 10000 * ang;
    createEnemy(px,py);
  }
  document.getElementById("greeting").innerHTML ="The boss's health is "+ georgehealth+". He has taken "+(WinCondition124*3-georgehealth)+" damage so far.";
}

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

function gameOver() {
  alert("GAME OVER. Final Score: " + score);
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
  document.getElementById("greeting").innerHTML ="The boss's health is "+georgehealth+". He has taken "+(WinCondition124*3-georgehealth)+" damage so far.";
if(georgehealth < 1){
    ghost.setCollider("rectangle", 0, 9999, 75, 75);
  document.getElementById("greeting").innerHTML ="Congratulations! You have defeated the boss!";
  ghost.remove()
  score = score+1
      gdie();
}

}
function createEnemy(x,y) {
  var newEnemy = createSprite(x,y);
  var attackImg = loadImage("images/enemy.png");
  newEnemy.addImage(attackImg);
  newEnemy.setSpeed(2.5, random(360));
  newEnemy.setCollider("rectangle", 0, 0, 60, 36);
  enemy.add(newEnemy);
}

function collisions() {
  enemy.overlap(projectiles, destroyOther);
  
  ghost.overlap(projectiles, loseHealth)
  ghost.overlap(projectiles, destroyOther1)
  
  player.overlap(enemy, gameOver);
  player.overlap(ghost, gameOver)
}


function draw() {
       if (score == WinCondition124-1) {
    
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
         
         alert("You Win! Final Score: " + score);
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
  
  ghostImg.resize(18*4,23*4)
  playerImg.resize(64,45)
  if(WinCondition124 == 0 || WinCondition124 == null){
    window.stop();
  }
}
}
