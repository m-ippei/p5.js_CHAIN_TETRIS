var c = [[9,"#d685b0","#d685b0","#fff353","#d685b0","#d685b0","#dbe159","#dbe159","#dbe159","#dbe159","#dbe159",9],[9,"#d685b0","#d685b0","#d685b0","#d685b0","#dbe159","#dbe159","#dbe159","#dbe159","#dbe159","#dbe159",9]]
var b = [19,20]
var blockParts = []
var a = [0,0,0,0,0,0,0,0,0,0,0]


function setup() {
  createCanvas(400, 400);
  a[0] = createVector(0,0)  //v
	a[1] = createVector(50,0)//v0
  a[2] = createVector(0,0)//v1
	a[3] = createVector(0,-20)//g
	a[4] = a[3].copy()//g0
	a[4] = a[3].mult(0.5)///g0
	a[5] = createVector(0,0)//pv
	a[6] = createVector(0,0)//r
  a[7] = false//start
  a[8] = 0//tarnslate x
  a[9] = 0//translate y
  a[10] = ""//color
  putBlock()
  frameRate(20)
}

function putBlock() {
  for(var i = 0;i<b.length;i++){
    blockParts[i] = []
    for(var j = 1;j<=10;j++){
      var arr = []
      Object.assign(arr,a)
      //arr[5] = createVector(0,0)
      arr[6] = createVector(j*10,b[i]*10)//r
      //console.log(arr[6].toString())
      arr[7] = false
      arr[8] = j*10
      arr[9] = b[i]*10
      arr[10] = c[i][j]
      blockParts[i][j-1] = arr
    }
  }
}

function Rect(x,y,tx,ty) {
	//rectMode(CENTER)
  //translate(0,0)
	translate(tx,ty)
	//translate(x,-y)
  //translate(x,y)
  translate(x,-y)
	rect(0,0,10,10)
}

function go(arr){
	if(arr[7]===false){
    arr[0].set(0,0)
    arr[0].add(arr[1])
    arr[0].rotate(random(0,PI))
		arr[5].set(0,0)
		arr[5].add(arr[0])
		arr[5].add(arr[4])
		arr[2] = arr[5].copy()
		arr[6].set(arr[2])
		arr[7]=true
	}else{
		arr[5].set(0,0)
		arr[5].add(arr[2])
		arr[5].add(arr[3])
		arr[2] = arr[5].copy()
		arr[6].add(arr[5])
		if(arr[6].y < 0){
			arr[7]=false
			arr[6].set(0,0)
		}
	}
  return arr;
}

function drawBlock() {
  
  
  /*
  for(var i = 0;i<blockParts.length;i++){
    for(var j = 0;j<blockParts[i].length;j++){
      blockParts[i][j] = go(blockParts[i][j])
      fill(blockParts[i][j][10])
      Rect(blockParts[i][j][6].x,blockParts[i][j][6].y,blockParts[i][j][8],blockParts[i][j][9])
    }
  }
  
  */
  
  
  //blockParts[1][5] = go(blockParts[1][5])
 // fill(blockParts[1][5][10])
  //Rect(blockParts[1][5][6].x,blockParts[1][5][6].y,blockParts[1][5][8],blockParts[1][5][9])
  
}

function draw() {
  background(220);
  drawBlock()
}
