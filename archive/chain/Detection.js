var a = ["r","g",0,"r",0,0,"r","g"]

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

function d(arr){
	var pre=0;
	var index=[];
	for(var i=1;i<=arr.length;i++){
		if(arr[i]-1===pre){
			append(index,pre)
		}else{
			pre=arr[i]
		}
	}
	return index;
}

function setup() {
  createCanvas(400, 400);
	var ans1,ans2;
	[ans1,ans2]= c(a);
	console.log(ans1)
	console.log(ans2)
	console.log(d(ans1))
}

function draw() {
  background(220);
}
