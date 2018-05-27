var FIELD = []
var mino = [
	[
		[0,0,0,0],
		[1,1,1,1],
		[0,0,0,0],
		[0,0,0,0]
	],[
		[0,0,0,0],
		[0,1,1,0],
		[0,1,1,0],
		[0,0,0,0]
	],[
		[0,0,0,0],
		[1,1,0,0],
		[0,1,1,0],
		[0,0,0,0]
	],[
		[0,0,0,0],
		[0,0,1,1],
		[0,1,1,0],
		[0,0,0,0]
	],[
		[0,0,1,0],
		[0,0,1,0],
		[0,1,1,0],
		[0,0,0,0]
	],[
		[0,1,0,0],
		[0,1,0,0],
		[0,1,1,0],
		[0,0,0,0]
	],[
		[0,0,0,0],
		[0,1,0,0],
		[1,1,1,0],
		[0,0,0,0]
	]
]
var b = mino[0]
var INDEX = 1;
var x=4;
var y=1;

function dt(arr,option){
	if(!option){option=300}
	for(var i=0,len = arr.length;i<len;i++){
		text(arr[i],100,(i*10)+10+option)
	}
}

function setup() {
  createCanvas(400, 400);
	for(var i = 0;i<22;i++){
		append(FIELD,[])
		for(var j = 0;j<12;j++){
			if(i===0||j===0){
				FIELD[i][j] = 9
			}else if(i===21||j===11){
				FIELD[i][j] = 9
			}else{
				FIELD[i][j] = 0
			}
		}
	}
	frameRate(1)
}

function Rotate(arr){
	var t_arr = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]
	for(var i = 0;i < 4;i++){
		for(var j = 0;j < 4;j++){
			t_arr[i][j] = arr[3-j][i];
		}
	}
	return t_arr;
}

function put(){
	for(var i = 0;i < 4;i++){
		for(var j = 0;j < 4;j++){
			FIELD[y+i][x+j] = b[i][j];
		}
	}
}

function keyReleased(){
	if(keyCode===38){
		b = Rotate(b)
	}else if(keyCode===32){
		b = mino[INDEX]
		if(INDEX===6){
			INDEX = 0
		}else{
			INDEX += 1
		}	
	}else if(keyCode===37){
		x-=1
	}else if(keyCode===39){
		x+=1
	}
}



function draw() {
  background(220);
	dt(b)
	dt(FIELD,1);
	if(y<17){
		y++
	}else if(y===17){
		y=0
	}
	put()
}
