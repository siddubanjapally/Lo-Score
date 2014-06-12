/**
 * Created by chinna on 12/6/14.
 */

var isUndefined = function(value) {
    return typeof value === 'undefined';
};

var isNull = function(value) {
    return value === null;
};

var isNumber = function(value) {
    return typeof value === 'number';
};

var isString = function(value) {
    return typeof value === 'string';
};

var isArray = function(value) {
    return Object.prototype.toString.apply(value) === '[object Array]';
};

var isObject = function(value) {
    return Object.prototype.toString.apply(value) === '[object Object]';
};
