var a = ["r","g",0,"r"]

var o = [
	["r","g"],
	["g","b"],
	["b","y"],
	["y","r"]
]

var b_set = ["r","g","b","a"]

function c(arr){
	var index = []
	var sps = []
	var len = arr.length;
	for(var i=0;i<len;i++){
		for(var j=0;j<len;j++){
			if(arr[i] === b_set[j]){
				append(index,i);
				append(sps,b_set[j])
			}
		}
	}
	return [index,sps];
}

function setup() {
  createCanvas(400, 400);
	var ans1,ans2;
	[ans1,ans2]= c(a);
	console.log(ans1)
	console.log(ans2)
}

function draw() {
  background(220);
}
