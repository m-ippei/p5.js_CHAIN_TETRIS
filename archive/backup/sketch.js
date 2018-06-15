function setup() {
  createCanvas(384, 672);
	frameRate(30)
  explosionSetting()
	createMino()
	stroke(70)
}

function draw() {
  background(220);
  if(effectsMode==="OFF"){
    drawField()
  }else{
    //drawBackField()
  }
  /*
  if(effectsMode==="ON"){
    explositonProcess()
  }
  */
  if(gameMode!=="COLD"){
    drawMino()
    if(detectionLineClear()===true){
      console.log("line")
    }
  }else{
    
  }
  //image(img[0], 0, 0,1280,720);
  /*
	if(effectsMode==="OFF"){
    clearLine()
  }
  */
  /*
  T += 8
	if(gameMode==="PLAY"){
    if(T>60){
      //moveMino("DOWN")
      T = 0
    }
	}
  */
  
  
	//info()
  
}

