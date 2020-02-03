function updateObjectWithKeyAndValue(object, key, value) {
  var newObj = {[key]: value};
  var result = Object.assign({}, object, newObj);
  return result;
}

function 