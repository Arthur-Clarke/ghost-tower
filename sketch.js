var torre, imagemTorre;
var caveira, imagemCaveira;
//inicio, jogando, fim;
var estado;
var musica;
var porta, imagemPorta, grupoPortas;
function preload(){
  imagemTorre = loadImage("tower.png");
  imagemCaveira = loadImage("ghost-standing.png");
  musica = loadSound("spooky.wav");
  imagemPorta = loadImage("door.png");
}

function setup(){
  createCanvas(600,600);    
  torre = createSprite(300,300);
  torre.addImage("fundo", imagemTorre);
  caveira = createSprite(300,300);
  caveira.addImage("personagem", imagemCaveira);
  caveira.scale = 0.5;
  estado = "inicio";
  grupoPortas = new Group();
}


function draw(){
  background('black');
  torre.velocityY = 2;
  if (torre.y > 590){
    torre.y = 300;
  }
  drawSprites();
  if (keyDown("space")&&estado == "inicio"){
    estado = "jogando";
    musica.play();
  }
  if (estado == "inicio"){
    fill ("red");
    textSize (20);
    text ("aperte espaço para jogar", 185, 200);
    torre.velocityY = 0;
  } else if(estado == "jogando"){
    caveira.velocityY = caveira.velocityY + 0.5;
    if(keyDown("left")){
      caveira.x = caveira.x -5;
    }
    if(keyDown("right")){
      caveira.x = caveira.x + 5;
    }
    if (keyDown("space")){
      caveira.velocityY = -10;

    }
    gerarPortas();
  }
}
function gerarPortas(){
  if (frameCount %200 == 0){
    porta = createSprite(200,-50);
    porta.x = Math.round(random(120,400));
    porta.velocityY = 2;
    porta.lifeTime = 420;
    porta.addImage("janela", imagemPorta);
    grupoPortas.add(porta);
  }
}


