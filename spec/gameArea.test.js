import { gameArea } from '../src/gameArea.js';

let width = 480;
let height = 800;
let testGameArea;
let mockCanvas;
let mockContext;
let componentWidth = 10;
let componentHeight = 20;
let componentX = 30;
let componentY = 40;
let startX = 0;
let startY = 0;

beforeEach(() => {
  mockContext = {
    fillRect: () => { },
    clearRect: () => { }
  }

  mockCanvas = {
    getContext: () => { return mockContext }
  }

  testGameArea = new gameArea(width, height, mockCanvas)
})

describe('rendering a rectangular object', () => {
  test('it fills the object with the specified colour', () => {
    testGameArea.drawRectangularObject(0, 0, 'red', 0, 0);
    expect(mockContext.fillStyle).toEqual('red');
  })

  test('it draws a rectangle with the specified coordinates', () => {
    jest.spyOn(mockContext, 'fillRect');
    testGameArea.drawRectangularObject(componentWidth, componentHeight, 'red', componentX, componentY);
    expect(mockContext.fillRect).toHaveBeenCalledWith(componentX, componentY, componentWidth, componentHeight);
  })
})

describe('deleting a rectangular object', () => {
  test('it deletes the object', () => {
    jest.spyOn(mockContext, 'clearRect');
    testGameArea.clearRectangularObject(startX, startY)
    expect(mockContext.clearRect).toHaveBeenCalledWith(startX, startY, testGameArea.canvas.width, testGameArea.canvas.height)
  })
})