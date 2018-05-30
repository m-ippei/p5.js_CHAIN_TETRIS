var Field = [
	[9,0,0,0,0,0,0,0,0,0,0,9],
	[9,0,0,0,0,0,0,0,0,0,0,9],
	[9,0,0,0,0,0,0,0,0,0,0,9],
	[9,0,0,0,0,0,0,0,0,0,0,9],
	[9,0,0,0,0,0,0,0,0,0,0,9],
	[9,0,0,0,0,0,0,0,0,0,0,9],
	[9,0,0,0,0,0,0,0,0,0,0,9],
	[9,0,0,0,0,0,0,0,0,0,0,9],
	[9,0,0,0,0,0,0,0,0,0,0,9],
	[9,0,0,0,0,0,0,0,0,0,0,9],
	[9,0,0,0,0,0,0,0,0,0,0,9],
	[9,0,0,0,0,0,0,0,0,0,0,9],
	[9,0,0,0,0,0,0,0,0,0,0,9],
	[9,0,0,0,0,0,0,0,0,0,0,9],
	[9,0,0,0,0,0,0,0,0,0,0,9],
	[9,0,0,0,0,0,0,0,0,0,0,9],
	[9,0,0,0,0,0,0,0,0,0,0,9],
	[9,0,0,0,0,0,0,0,0,0,0,9],
	[9,0,0,0,0,0,0,0,0,0,0,9],
	[9,0,0,0,0,0,0,0,0,0,0,9],
	[9,0,0,0,0,0,0,0,0,0,0,9],
	[9,9,9,9,9,9,9,9,9,9,9,9],
]

function setup() {
  createCanvas(120, 220);
	frameRate(1)
}

function draw() {
  background(220);
	deleteLines()
}

function deleteLine(){
	arr = deleteLines()
}

function Delete(num) {
	var arr = Field.slice(0,num)
	var arr2 = Field.slice(num+1,21)
	arr = arr.concat(arr2)
	arr.unshift([9,0,0,0,0,0,0,0,0,0,0,9])
	Field = arr
}

function checkArr(arr) {
	for(var i = 0; i < 11;i++){
		if(arr[i] === false){
			return false
		}
	}
	return true
}

function doDelete(arr) {
	for(var i = 1; i<=arr.length;i++){
		Delete(arr[i])
	}
}

function deleteLines(){
	var queueDeleteArr = []
	for(var i=0;i<22;i++){
		var arr = [false,false,false,false,false,false,false,false,false,false]
		for(var j=1;j<11;j++){
			if(typeof Field[i][j] === "string"){
				arr[j] = true
			}
		}
		if(checkArr(arr)){
			append(queueDeleteArr,i)
		}
	}
	doDelete(queueDeleteArr)
}



