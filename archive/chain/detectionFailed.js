var a = ["r","g",0,"r",0,0,"r","g",0,0,0,"b","y"]

var o = [
	["r","g"],
	["g","b"],
	["b","y"],
	["y","r"]
]

var b_set = ["r","g","b","y"]

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

// r g   is  r g  ?

function chainRule(num) {
	for(var i=0;i<4;i++){
		   //origin[num] and origin[num+1] is
		   //o[0][0] and o[0][1]?
			if(o[i][0] === a[num] && o[i][1] === a[num+1]){
				return true;
			}
	}
}


function chain(arr){
	//var index = [];
	for(var i;i<arr.length;i++){
		if(chainRule(arr[i])===true){
			console.log("chain!!")
		}
	}
}


function setup() {
  createCanvas(400, 400);
	var ans1,ans2;
	console.log(a);
	[ans1,ans2]= c(a);
	console.log(ans1)
	console.log(ans2)
	var temp = d(ans1)
	console.log(temp)
	//console.log(chain(temp))
}

function draw() {
  background(220);
}
