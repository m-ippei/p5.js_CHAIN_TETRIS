function preload() {
  img[0] = loadImage('project-folder/background.png');
  img[1] = loadImage('project-folder/red.png');
  img[2] = loadImage('project-folder/green.png');
  img[3] = loadImage('project-folder/blue.png');
  img[4] = loadImage('project-folder/yellow.png');
}

function explosionSetting() {
  for(var i=0;i<4;i++){
		Vs[i] = []
		Rs[i] = []
		Ps[i] = []
		for(var j=0;j<10;j++){
			Vs[i][j] = createVector(60,0)
			Vs[i][j].rotate(random(0,PI))
			Rs[i][j] = createVector(0,0)
      Ps[i][j] = createVector(0,0)
		}
	}
}

function explosionSet() {
  for(var i=0;i<eI.length;i++){
		for(var j=0;j<10;j++){
      Ps[i][j] = createVector((j+1)*32,eI[i]*32)
		}
	}
}

function createMino(){
	mino.shape = random(minos)
	mino.color = random(colors)
	mino.X = 4
	mino.Y = 0
}

function detectionLineClear() {
  for(var i=0;i<20;i++){
    var j = 1;
    while(typeof Field[i][j] === "string"){
      if(j===10){
        gameMode = "COLD"
        return true;
      }
      j++
    }
  }
  return false;
}

/*
function clearLine() {
  var deleteArr = []
  backField = Field.filter((arr,index)=>{
		for(var i = 1;i<=10;i++) {
			if(typeof arr[i] === "string"){
				if(i===10){
					effectsMode = "ON";
          gameMode = "STOPPED"
					append(deleteArr,index)
          append(popBlocks,arr)
          append(eI,index)
				}
			}else{
				return true
			}
		}
		})
  
  explosionSetting()
  explosionSet()
  
  if(deleteArr.length>0){
    for(var i=0;i<deleteArr.length;i++){
      backField.unshift([9,0,0,0,0,0,0,0,0,0,0,9])
    }
  }
}

*/


function harddrop(){
  while(tryMove()===true){
    mino.Y += 1;
  }
}

function moveMino(dir){
	switch(dir) {
		case "LEFT":
			mino.X -= 1
			if(tryMove()===false){
				mino.X += 1
			}
			break;
		case "RIGHT":
			mino.X += 1
			if(tryMove()===false){
				mino.X -= 1
			}
		  break;
		case "DOWN":
			mino.Y += 1
			if(tryMove()===false){
				mino.Y -= 1
				put_inField()
				mino.Y = 0
				mino.X = 4
				createMino()
				if(tryMove()===false){
					gameMode = "GAMEOVER"
				}
			}
			break;
    case "DROP":
      while(tryMove()===true){
        mino.Y += 1;
      }
      mino.Y-=1;
      put_inField()
      mino.Y = 0
      mino.X = 4
      createMino()
      break;
		default:
			move("DOWN")
	}
}


function rotateMino(dir){
	if (dir===undefined){dir="RIGHT"}
	var keepMino = mino.shape
	var rotatedMino = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]
	for(var i = 0;i < 4;i++){
		for(var j = 0;j < 4;j++){
			if      (dir==="RIGHT"){
				rotatedMino[i][j] = mino.shape[3-j][i]
			}else if(dir==="LEFT"){
				rotatedMino[i][j] = mino.shape[j][3-i];
			}
		}
	}
	mino.shape = rotatedMino
	if(tryMove()===false){
		mino.shape = keepMino
	}
}




function put_inField() {
	for(var i = 0;i<4;i++){
		for(var j = 0;j<4;j++){
			if(mino.shape[i][j]){
				Field[mino.Y+i][mino.X+j] = mino.color
			}
		}
	}
}

function tryMove(){
	for(var i = 0;i<4;i++){
		for(var j = 0;j<4;j++){
			if((mino.Y+i)<21){
				if((typeof Field[mino.Y+i][mino.X+j] === "string") && mino.shape[i][j]){
					return false;
				}
				if(Field[mino.Y+i][mino.X+j] > 0 && mino.shape[i][j] > 0){
					return false;
				}
			}
		}
	}
	return true;
}

function Rect(x,y,c) {
  translate(x,y)
  imageMode(CENTER)
  rotate(a)
  var num;
  if(c==="red"){
    num = 1;
  }else if(c==="green"){
    num = 2;
  }
  else if(c==="blue"){
    num = 3;
  }
  else if(c==="yellow"){
    num = 4;
  }
  image(img[num],0,0)
}

function resetRotate() {
	for(var i=0;i<eI.length;i++){
		for(j=0;j<10;j++){
			Vs[i][j].set(60,0)
			Vs[i][j].rotate(random(0,PI))
		}	
	}
}

function explositonProcess(){
  t+=0.2
	a+=0.4
	if(t>13){
		effectsMode="OFF"
    gameMode = "PLAY"
    Field = backField
    popBlocks = []
    eI = []
    a=0
		t=0
    return false;
	}
	var t2 = t*t
	
	for(var i=0;i<eI.length;i++){
		for(j=0;j<10;j++){
		push()
		Rs[i][j].y =  (-Vs[i][j].y * t) + (t2*5) + Ps[i][j].y
		Rs[i][j].x =  Vs[i][j].x * t + Ps[i][j].x
		Rect(Rs[i][j].x,Rs[i][j].y,Field[eI[i]][j+1])
		pop()
 	  }	
	}
}
