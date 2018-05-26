var a = []
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

function dt(arr){
	for(var i=0,len = arr.length;i<len;i++){
		text(arr[i],100,(i*10)+10)
	}
}

function setup() {
  createCanvas(400, 400);
	for(var i = 0;i<22;i++){
		append(a,[])
		for(var j = 0;j<12;j++){
			if(i===0||j===0){
				a[i][j] = 9
			}else if(i===21||j===11){
				a[i][j] = 9
			}else{
				a[i][j] = 0
			}
		}
	}
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

function mouseClicked(){
	b = Rotate(b)
}

function draw() {
  background(220);
	dt(b)
}
