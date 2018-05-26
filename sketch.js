var a = []
var mino = {
	"I":[],
	"O":[],
}

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
				a[i][j] = 1
			}else if(i===21||j===11){
				a[i][j] = 1
			}else{
				a[i][j] = 0
			}
		}
	}
}

function draw() {
  background(220);
	dt(a)
}
