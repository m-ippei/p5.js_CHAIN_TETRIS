

var patternA = [
	[
		[0,1,0],
		[1,1,1],
		[0,0,0]
	],
  [
		[0,1,0],
		[0,1,1],
		[0,1,0]
	],
	[
		[0,0,0],
		[1,1,1],
		[0,1,0]
	],
	[
		[0,1,0],
		[1,1,0],
		[0,1,0]
	]
]

var field = [];
var metl = 0;
var W,H;

function drawCordinate(){
	for(var i=1;i<10;i++){
		line(metl*i,0,metl*i,W)
		line(0,metl*i,W,metl*i)
	}
}

function setField(wid,hig){
	createCanvas(wid,hig);
	metl = wid/9
	for(var i = 0;i<11;i++){
		append(field,[])
		for(var j = 0;j<11;j++){
			if(j===0){
				field[i][j] = 1
			}else if(i===10||j===10){
				field[i][j] = 1
			}else{
				field[i][j] = 0
			}
		}
	}
}

function drawBlock(x,y,tdA,order_num){
	field[y][x] = tdA[order_num][1][1]
	field[y-1][x-1] = tdA[order_num][0][0]
	field[y-1][x] = tdA[order_num][0][1]
	field[y-1][x+1] = tdA[order_num][0][2]
	field[y][x-1] = tdA[order_num][1][0]
	field[y][x+1] = tdA[order_num][1][2]
	field[y+1][x-1] = tdA[order_num][2][0]
	field[y+1][x] = tdA[order_num][2][1]
	field[y+1][x+1] = tdA[order_num][2][2]
}

function drawBlocks(arr,std_w){
	var cr = std_w/2
	translate(cr,cr)
	for(var i=1;i<10;i++){
		for(var j=1;j<10;j++){
			if(arr[i][j]){
				ellipse((j-1)*std_w,(i-1)*std_w,cr,cr)
			}
		}
	}
	translate(0,0)
}

function setup() {
	//W=windowWidth;H=windowHeight;
	W=400;H=400
	setField(W,H)
	frameRate(1)
}

function draw() {
	background(220);
	drawCordinate();
	drawBlock(5,1,patternA,0);
	drawBlocks(field,metl)
}


