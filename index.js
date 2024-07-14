let convertToArray = (data) => {
    if (typeof (data) === 'object') {
      return [] = [...Object.values(data)]
    } else {
      return data
    }
  }
  
  let myEach = (collection, cb) => {
    let col = convertToArray(collection)
  
    for (let i = 0; i < col.length; i++) {
      cb(col[i])
    }
    return collection
  }
  
  let myMap = (collection, cb) => {
    let col = convertToArray(collection)
    let arr = []
  
    for (let i = 0; i < col.length; i++) {
      arr.push(cb(col[i]))
    }
    return arr
  }
  
  function myReduce(collection, cb, acc) {
    let col = convertToArray(collection)
    
    if (arguments.length === 2) {
      acc = col[0]
      col.shift()
    }
  
    for (let i = 0; i < col.length; i++) {
      acc = cb(acc, col[i])
    }
    return acc
  }
  
  function myFind(collection, cb) {
    let col = convertToArray(collection)
    for (let i = 0; i < col.length; i++) {
      if (cb(col[i])) {
        return col[i]
      }
    }
  }
  
  function myFilter(collection, cb) {
    let col = convertToArray(collection)
    let passedValues = []
    
    for (let i = 0; i < col.length; i++) {
      if (cb(col[i])) {
        passedValues.push(col[i])
      }
    }
    return passedValues
  }
  
  function mySize(collection) {
    let size = 0
    if(typeof(collection) === 'object') {
      size = Object.keys(collection).length
    } else {
      size = collection.length
    }
    return size
  }
  
  function myFirst(arr, n) {
    if(arguments.length === 2) {
      return arr.slice(0, n)
    } else {
      return arr[0]
    }
  }
  
  function myLast(arr, n) {
    if(arguments.length === 2) {
      return arr.slice(-n)
    } else {
      return arr[arr.length-1]
    }
  }
  
  function mySortBy(data, cb) {
    let arr = []
    for(let i = 0; i < data.length; i++) {
      arr.push(cb(data[i]))
    }
  
    for(let i = 0; i < arr.length; i++) {
      for(let j = i; j < arr.length; j++) {
        if(arr[i] > arr[j]) {
          let temp = arr[i]
          arr[i] = arr[j]
          arr[j] = temp
        }
      }
    }
    return arr
  }