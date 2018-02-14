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
    0: ['0xF0', '0x90', '0x90', '0x90', '0xF0'],
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
    7: [],
    8: [],
    9: [],
    A: [],
    B: [],
    C: [],
    D: [],
    E: [],
    F: [],
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

function putCharacter(character, x, y) {

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
    return parseInt(hexnum, 16).toString(2);
}