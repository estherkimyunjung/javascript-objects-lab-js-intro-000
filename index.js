function updateObjectWithKeyAndValue(object, key, value) {
  var newObj = {[key]: value};
  var result = Object.assign(object,newObj);
  
  if(object === newObj) {
    newObj = {[key]: "undefined"};
  } 
    return object, result;
}
