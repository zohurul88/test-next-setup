export function ucFirst(string) {
  return string.substring(0, 1).toUpperCase() + string.substring(1);
}

export function getFileBase64(file) {
  return new Promise(function (resolve, reject) {
    var reader = new FileReader();
    reader.onload = function () {
      resolve(reader.result);
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export function objClean(obj) {
  for (var propName in obj) {
    if (
      obj[propName] === null ||
      obj[propName] === undefined ||
      obj[propName] === ""
    ) {
      delete obj[propName];
    } else if (Array.isArray(obj[propName]) && obj[propName] == 0) {
      delete obj[propName];
    }
  }
  return obj;
}
