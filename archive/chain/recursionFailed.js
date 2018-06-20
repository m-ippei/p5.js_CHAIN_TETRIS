function set_data(arr,num){
  data.mapArr = arr
  data.HERE = num
  data.keyColor = arr[num]
  data.queue= [num]
  data.groups = []
  data.isQueue = function(){
    if(data.queue !== []){
      return true
    }else{
      return false
    }
  }
  data.clear = function(){
    data.mapArr = []
    data.HERE = undefined
    data.keyColor = undefined
    data.queue = []
    data.groups = []
  }
}

function sameColors(d) {
  
  d.HERE = d.queue.shift()
  append(d.groups,d.HERE)
  
  d.mapArr[d.HERE] = 0
  let dir4 = [false,false,false,false]
  
  //below 12 is width(->exploring up and down)
  if(d.keyColor===d.mapArr[d.HERE-3]){
    dir4[0] = d.HERE-3
  }
  if(d.keyColor===d.mapArr[d.HERE+3]){
    dir4[1] = d.HERE+3
  }
  if(d.keyColor===d.mapArr[d.HERE-1]){
    dir4[2] = d.HERE-1
  }
  if(d.keyColor===d.mapArr[d.HERE+1]){
    dir4[3] = d.HERE+1
  }
  
  for(let i=0;i<dir4.filter(val=>val!==false).length-1;i++){
    append(d.queue,d.HERE)
  }
  
  dir4 = dir4.filter(val=>val!==false)
  
  for(let dir of dir4){
    append(d.queue,dir)
  }
  
  /*
  if(dir4){
    append(d.queue,dir4)
  }
  */
  
  return d
  
  //return dir4
  
  /*
  if(dir4 !== []){
    for (let dir of dir4){
        return sameColors(mapArr,dir,nodeArr,keyColor)
    }
  }
  
  */
  /*
  
  if(nodeArr){
      return sameColors(mapArr,nodeArr.shift(),nodeArr,keyColor)
  }else{
    return mapArr
  }
  
  */
  
}

/*

function sameColors(mapArr,HERE,nodeArr) {
  var dir4 = [false,false,false,false]
  
  //below 12 is width(->exploring up and down)
  if(mapArr[HERE]===mapArr[HERE-12]){
    dir4[0] = HERE-12
  }
  if(mapArr[HERE]===mapArr[HERE+12]){
    dir4[1] = HERE+12
  }
  if(mapArr[HERE]===mapArr[HERE-1]){
    dir4[2] = HERE-1
  }
  if(mapArr[HERE]===mapArr[HERE+1]){
    dir4[3] = HERE+1
  }
  
  for(let i=0;i<dir4.filter(val=>val===false).length;i++){
    append(nodeArr,HERE)
  }
  return nodeArr
}

*/
