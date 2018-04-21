var a = [];
var b = 0;
var s = 0;
var st = 0;
var q = false;

function setup() {
	st = 400;
  createCanvas(st, st);
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
	a[1][4] = 2;
	frameRate(1)
}

function draw() {
  background(220);
	for(var i=1;i<9;i++){
		line(s*i,0,s*i,st)
		line(0,s*i,st,s*i)
	}
	translate(s/2,s/2)
	for(var j=1;j<10;j++){
		for(var k=1;k<10;k++){
			if(a[k][j]){
				ellipse(j*s,(k-1)*s,s/2,s/2)
			}
		}
	}
	
	var t = doOnce()
	if(t==="gameOver"){
		text("GameOver",100,100)
	}
	
	
	translate(0,0)
}

function doOnce(){
	for(var l=1;l<10;l++){
		for(var m=1;m<10;m++){
			if(a[2][4] === 3){
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
					a[1][4] = 2
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

function mouseClicked(){
	console.log(a)
}
