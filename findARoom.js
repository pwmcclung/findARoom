function meeting(x){
   let count = 0
   for (let i = 0; i < x.length; i++){
     if (x[i] === 'O'){
       count ++
     }
   }
   if (count > 0){
     return x.indexOf('O')
   }
  else{
    return 'None available!'
  }
}
