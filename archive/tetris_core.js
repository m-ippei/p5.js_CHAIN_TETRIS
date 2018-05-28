function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}

function any() {
	if(tryMove(6,3,m,b)){
		for(var i = 0;i<4;i++){
			for(var j = 0;j<4;j++){
				if(mino[i][j]){
					board[y+i][x+j] = mino[i][j]
				}
			}
		}
	}
}

function tryMove(x,y,mino,board){
	for(var i = 0;i<4;i++){
		for(var j = 0;j<4;j++){
			if(board[y+i][x+j] > 0 && mino[i][j] > 0){
				return false;
			}
		}
	}
	return true;
}
