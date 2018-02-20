var PIXEL_WIDTH = 10;
var PIXEL_HEIGHT = 10;

/** 
 * 
*/
var CANVAS = document.getElementById('chip8-screen');
CANVAS.height = PIXEL_HEIGHT * 32;
CANVAS.width = PIXEL_WIDTH * 64;
/** 
 * @type {CanvasRenderingContext2D}
*/
var CTX = CANVAS.getContext("2d");
/** 
 * 
*/
var DEFAULT_CHARS = {
    '0': ['0xF0', '0x90', '0x90', '0x90', '0xF0'],
    '1': ['0x20', '0x60', '0x20', '0x20', '0x70'],
    '2': ['0xF0', '0x10', '0xF0', '0x80', '0xF0'],
    '3': ['0xF0', '0x10', '0xF0', '0x10', '0xF0'],
    '4': ['0x90', '0x90', '0xF0', '0x10', '0x10'],
    '5': ['0xF0', '0x80', '0xF0', '0x10', '0xF0'],
    '6': ['0xF0', '0x80', '0xF0', '0x90', '0xF0'],
    '7': ['0xF0', '0x10', '0x20', '0x40', '0x40'],
    '8': ['0xF0', '0x90', '0xF0', '0x90', '0xF0'],
    '9': ['0xF0', '0x90', '0xF0', '0x10', '0xF0'],
    'A': ['0xF0', '0x90', '0xF0', '0x90', '0x90'],
    'B': ['0xE0', '0x90', '0xE0', '0x90', '0xE0'],
    'C': ['0xF0', '0x80', '0x80', '0x80', '0xF0'],
    'D': ['0xE0', '0x90', '0x90', '0x90', '0xE0'],
    'E': ['0xF0', '0x80', '0xF0', '0x80', '0xF0'],
    'F': ['0xF0', '0x80', '0xF0', '0x80', '0x80'],
};

/** 
 * 
*/
var MEMORY = [];

/** 
 * 
*/
var REGISTERS = {

}

/** 
 * Program Counter
*/
var PC = 0;
/**
 * Stack Pointer
 */
var SP = 0;

function putPixel(x, y, color) {
    if (isNaN(x) || isNaN(y)) {
        throw new Error('Coordinate is not valid');
    }
    CTX.fillStyle = "black";
    if (color && color == "white" || color == "black") {
        CTX.fillStyle = color;
    }
    CTX.fillRect(x * PIXEL_WIDTH, y * PIXEL_HEIGHT, PIXEL_WIDTH, PIXEL_HEIGHT);
}

function putCharacter(character, x, y, mode) {
    //FIXME: shouldnt be default chars, but loaded from the MEMORY
    var chararr = DEFAULT_CHARS[character].map(Hex2Bin);
    chararr.forEach(function (charRow, rowIdx) {
        //    console.log(charRow, rowIdx);
        charRow.split('').forEach(function (charBin, binIdx) {
            //      console.log(charBin, binIdx);
            if (charBin == 1) {
                putPixel(x + binIdx, y + rowIdx)
            }
        })
    });
}

function setMemoryContent(address, content) {
    if (isNaN(address) || address < 0 || address > 4095) {
        throw new Error('invalid address');
    }
    MEMORY[address] = content;
}

function getMemoryContent(address) {
    if (isNaN(address) || address < 0 || address > 4095) {
        throw new Error('invalid address');
    }
    if (!MEMORY[address]) {
        return 0;
    }
    return MEMORY[address];
}

function Hex2Bin(hexnum) {
    var hex = parseInt(hexnum, 16).toString(2);
    if (hex.length < 8) {
        var iter = 8 - hex.length;
        for (var i = 0; i < iter; i++) {
            hex = "0" + hex;
        }
    } else if (hex.length > 8) {
        throw new Error('Too big number');
    }
    return hex;
}

function loadDefCharsToMemory() {

}

function initChip8() {

}