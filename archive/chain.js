
var Field = [
	[9,0,0,0,9],
	[9,0,0,0,9],
	[9,0,0,0,9],
	[9,0,0,0,9],
	[9,"blue","blue",0,9],
	[9,"red","red","green",9],
	[9,"red","red","green",9],
	[9,9,9,9,9]
]

function chain(arr) {
	for(var i = 1; i<=3; i++){
		if(Field[arr[0]][i]==="red"){
			if(Field[arr[0]-1][i]==="blue"){
				Field[arr[0]-1][i] = 0
			}
		}
	}
	//console.log(arr)
}

function clearLines() {
	var deleteArr = []
	var updateField = Field.filter((arr,index)=>{
		for(var i = 1;i<=3;i++) {
			if(typeof arr[i] === "string"){
				if(i===3){
					append(deleteArr,index)
				}
			}else{
				return true
			}
		}
		})
	
	for(var i=0;i<deleteArr.length;i++){
		updateField.unshift([9,0,0,0,9])
	}
	
	chain(deleteArr)
	
	Field = updateField
}

function setup() {
  createCanvas(400, 400);
	console.log(Field)
	clearLines()
	console.log(Field)
}

function draw() {
  background(220);
}
