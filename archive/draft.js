function setup() {
  createCanvas(400, 400);
	console.log(getFieldData(-1,3))
}

function draw() {
  background(220);
}

ROW = 10
COLUMN = 20

Field = [
	[0,0,0,1,0,0,0,1,0,1,0,0,0],
	[0,0,0,0,1,0,0,0,0,0,0,0,0],
	[0,1,0,0,0,1,0,0,0,1,1,0,0],
	[0,0,0,0,0,1,0,0,0,0,0,1,0],
	[0,0,1,0,0,0,0,1,0,0,0,0,1],
	[0,0,1,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0],
]

function getFieldData(x,y){
	if(x<0){x=0}else if(ROW-1<x){x=ROW-1}
	if(y<0){y=0}else if(COLUMN-1<y){y=COLUMN-1}
	copyFieldData5x5 = []
	for(var i=0;i<5;i++){
		copyFieldData5x5[i] = []
		for(var j=0;j<5;j++){
			if(Field[y+i][x+j] !== undefined){
				copyFieldData5x5[i][j] = Field[y+i][x+j]
			}
		}
	}
	return copyFieldData5x5
}

function check(x,y){
	if(willBlock(x,y)){
		canMove = false
	}else{
		canMove = true
	}
}

function action(){
	if(canMove){
		move()
	}else{
		stay()
	}
}
