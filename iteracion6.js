const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];
let removeDuplicates = (param) => {

  for(i = 0; i < param.length; i++) {
      for(j = i + 1; j < param.length; j++) {
        if(param[i] == param[j]) {
        param.splice(j, 1)
      }
    }
  }
  return param
}

console.log(removeDuplicates(duplicates))