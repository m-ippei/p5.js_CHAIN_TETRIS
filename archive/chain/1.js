var origin = ["r","g"]

var o = [
	["r","g"],
	["g","b"],
	["b","y"],
	["y","r"]
]

function chainRule(num) {
	for(var i=0;i<4;i++){
		   //origin[num] and origin[num+1] is
		   //o[0][0] and o[0][1]?
			if(o[i][0] === origin[num] && o[i][1] === origin[num+1]){
				return true;
			}
	}
}

function chain(arr){
	for(var i=0;i<1;i++){
		chainRule()
	}
}

function setup() {
  createCanvas(400, 400);
	console.log(chainRule(0))
}

function draw() {
  background(220);
}
