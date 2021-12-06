let array = [1, 4, 11, 2, 37,-4]

let z = 0
for (let x = 0;x < array.length; x++){
  for(let y = 0; y < array.length; y++){
    if(array[x] + array[y] == 0){
      z++
}
  }
}
if (z > 0){
  console.log('true')
}else {
  console.log('false')
}