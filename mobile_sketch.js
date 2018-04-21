var a = [];
var b = 0;
var s = 0;
var st = 0;
var q = false;
var W,H,w,h;

function setup() {
     if(deviceOrientation){
			 W=windowWidth;H=windowHeight;
		 }else{
			 W=400;H=600;
		 }
	w=W/2;h=H/2
	st = W;
  createCanvas(st, H);
	s = st/9
	for(var i = 0;i<11;i++){
		append(a,[])
		for(var j = 0;j<11;j++){
			if(i===0||j===0){
				a[i][j] = 1
			}else if(i===10||j===10){
				a[i][j] = 1
			}else{
				a[i][j] = 0
			}
		}
	}
	a[1][5] = 2;
	frameRate(3)
}

function draw() {
  background(220);
	for(var i=1;i<10;i++){
		line(s*i,0,s*i,st)
		line(0,s*i,st,s*i)
	}
	translate(s/2,s/2)
	for(var j=1;j<10;j++){
		for(var k=1;k<10;k++){
			if(a[k][j]){
				ellipse((j-1)*s,(k-1)*s,s/2,s/2)
			}
		}
	}

	var t = doOnce()
	if(t==="gameOver"){
		text("GameOver",100,100)
	}
     
     btnDraw()

	translate(0,0)
}

function btnDraw(){
  translate(-s/2,-s/2)
  //ellipse(mouseX,mouseY,10,10)
   line(W/3,W,W/3,W+(s*2))
   line(W*2/3,W,W*2/3,W+(s*2))
   line(0,W+(s*2),W,W+(s*2))
   textSize(30)
   textAlign(CENTER)
   text("<-",W/6,W+s)
   text("->",W*5/6,W+s)
}

function ClearLine(){
	for(var i=1;i<10;i++){
		if(a[9][i]!==3){
			return false
		}
	}
	for(var j=1;j<10;j++){
		a[9][j] = 0;
	}
}

function doOnce(){
	ClearLine()
	for(var l=1;l<10;l++){
		for(var m=1;m<10;m++){
			if(a[2][5] === 3){
				return "gameOver"
			}

			if(a[l][m]===2){
				if(a[l+1][m]!==1&&a[l+1][m]!==3){
					if(q){
						doLR(l,m)
						return false;
					}
					a[l+1][m] = 2
					a[l][m] = 0
					return false;
				}else if(a[l+1][m]===1||a[l+1][m]===3){
					a[l][m] = 3
					a[1][5] = 2
					return false
				}
			}
		}
	}
}

function doLR(y,x){
	if      (q==="<-"){
		if(a[y][x-1]!==1){
			a[y][x-1] = 2;
			a[y][x] = 0;
		}
		q=false
	}else if(q==="->"){
		if(a[y][x+1]!==1){
			a[y][x+1] = 2;
			a[y][x] = 0;
		}
		q=false
	}
}

function keyPressed(){
	if(!q){
		if      (keyCode===LEFT_ARROW){
			q = "<-"
		}else if(keyCode===RIGHT_ARROW){
			q = "->"
		}
	}
}

function touchStarted(){
  if(!q){
		if      (mouseX<(W/3)){
			q = "<-"
		}else if(mouseX>(W*2/3)){
			q = "->"
		}
	}
}

