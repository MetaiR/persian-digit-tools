'use strict';

var expect = require('chai').expect;
var convertor = require('../built/index.js').DigitConvertor;

var easy = '123456 3213 64123,231';
var easyPersian = '۱۲۳۴۵۶ ۳۲۱۳ ۶۴۱۲۳,۲۳۱';

var complex = 'hello 123.sda31 this1233is a complex 1';
var complexPersian = 'hello ۱۲۳.sda۳۱ this۱۲۳۳is a complex ۱';

describe('test converting digits', () => {
    // test toPersian method
    it('convert an easy string with english digit to an string with persian digit', () => {
        const result = convertor.toPersian(easy);
        expect(result).to.equals(easyPersian);
    });
    it('convert a complex string with english digit to an string with persian digit', () => {
        const result = convertor.toPersian(complex);
        expect(result).to.equals(complexPersian);
    });

    //test toEnglish method
    it('convet an easy string with persian digit to an string with english digit', () => {
        const result = convertor.toEnglish(easyPersian);
        expect(result).to.equals(easy);
    });
    it('convert a complex string with persian digit to an string with english digit', () => {
        const result = convertor.toEnglish(complexPersian);
        expect(result).to.equals(complex);
    });
});