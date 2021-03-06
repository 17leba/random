const fs = require('fs')
const path = require('path')
const Type = require('./type')

let extend = function(defaults, options) {
	let result = defaults || {}
	for (var i in options) {
		if (Type.isObject(options[i])) {
			result[i] = extend(result[i], options[i])
		} else {
			result[i] = options[i]
		}
	}
	return result
}

let generateArray = function(star = 0, end = 10) {
	let result = []
	for (var i = star; i <= end; i++) {
		result.push(i)
	}
	return result
}

let randomID = function(prefix) {
	return `${prefix}_${Math.random().toString(36).substr(2, 9)}`
}

let mkdirsSync = function(dirname){
	if(fs.existsSync(dirname)){
		return true
	}else{
		if(mkdirsSync(path.dirname(dirname))){
			fs.mkdirSync(dirname)
			return true
		}
	}
}
let getSuffixName = function(fileName){
	let nameList = fileName.split('.')
	return nameList[nameList.length - 1]
}

module.exports = {
	extend,
	generateArray,
	randomID,
	mkdirsSync,
	getSuffixName
}