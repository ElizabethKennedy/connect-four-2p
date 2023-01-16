import { boardScore, scorePosition } from '../boardScore';
import { counter } from '../helpers';

const randomGrid1: counter[][] = [
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  ['red', null, null, 'yellow', null, null, null],
  ['red', null, null, 'yellow', null, null, null],
  ['red', null, null, 'yellow', 'yellow', null, null],
];
const randomGrid2: counter[][] = [
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  ['red', null, null, null, null, null, null],
  ['red', null, null, null, null, null, null],
  ['red', null, 'yellow', 'yellow', 'yellow', null, null],
];

const playerWinVerticallyGrid: counter[][] = [
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  ['red', null, null, null, null, null, null],
  ['red', null, null, null, null, null, null],
  ['red', null, null, null, null, null, null],
  ['red', null, null, null, null, null, null],
];
const cpuWinVerticallyGrid: counter[][] = [
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  ['yellow', null, null, null, null, null, null],
  ['yellow', null, null, null, null, null, null],
  ['yellow', null, null, null, null, null, null],
  ['yellow', null, null, null, null, null, null],
];
const cpuWinHorizontallyGrid: counter[][] = [
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, 'yellow', 'yellow', 'yellow', 'yellow', null],
];
const playerWinHorizontallyGrid: counter[][] = [
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, 'red', 'red', 'red', 'red', null],
];

const playerWinDiagonal1Grid: counter[][] = [
  ['red', null, null, null, null, null, null],
  [null, 'red', null, null, null, null, null],
  [null, null, 'red', null, null, null, null],
  [null, null, null, 'red', null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
];
const cpuWinDiagonal1Grid: counter[][] = [
  ['yellow', null, null, null, null, null, null],
  [null, 'yellow', null, null, null, null, null],
  [null, null, 'yellow', null, null, null, null],
  [null, null, null, 'yellow', null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
];
const playerWinDiagonal2Grid: counter[][] = [
  [null, null, null, null, null, null, 'red'],
  [null, null, null, null, null, 'red', null],
  [null, null, null, null, 'red', null, null],
  [null, null, null, 'red', null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
];
const cpuWinDiagonal2Grid: counter[][] = [
  [null, null, null, null, null, null, 'yellow'],
  [null, null, null, null, null, 'yellow', null],
  [null, null, null, null, 'yellow', null, null],
  [null, null, null, 'yellow', null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
];

describe('board score testing', () => {
  test('boardScore should return 35', () => {
    const points = boardScore(randomGrid1, 100000);
    expect(points).toBe(35);
  });

  test('boardScore should return 17', () => {
    const points = boardScore(randomGrid2, 100000);
    expect(points).toBe(17);
  });
  test('boardScore should return 100000 when cpu wins vertically', () => {
    const points = boardScore(cpuWinVerticallyGrid, 100000);
    expect(points).toBe(100000);
  });
  test('boardScore should return -100000 when player wins vertically', () => {
    const points = boardScore(playerWinVerticallyGrid, 100000);
    expect(points).toBe(-100000);
  });

  test('boardScore should return 100000 when cpu wins horizontally', () => {
    const points = boardScore(cpuWinHorizontallyGrid, 100000);
    expect(points).toBe(100000);
  });

  test('boardScore should return -100000 when player wins horizontally', () => {
    const points = boardScore(playerWinHorizontallyGrid, 100000);
    expect(points).toBe(-100000);
  });
  test('boardScore should return 100000 when cpu wins diagonal1', () => {
    const points = boardScore(cpuWinDiagonal1Grid, 100000);
    expect(points).toBe(100000);
  });

  test('boardScore should return -100000 when player wins diagonal1', () => {
    const points = boardScore(playerWinDiagonal1Grid, 100000);
    expect(points).toBe(-100000);
  });
  test('boardScore should return 100000 when cpu wins diagonal2', () => {
    const points = boardScore(cpuWinDiagonal2Grid, 100000);
    expect(points).toBe(100000);
  });

  test('boardScore should return -100000 when player wins diagonal2', () => {
    const points = boardScore(playerWinDiagonal2Grid, 100000);
    expect(points).toBe(-100000);
  });

  test('scorePosition should return 3', () => {
    const points = scorePosition(5, 2, 0, 1, randomGrid2, 100000);
    expect(points).toBe(3);
  });
  test('scorePosition should return -100000', () => {
    const points = scorePosition(2, 0, 1, 0, playerWinVerticallyGrid, 100000);
    expect(points).toBe(-100000);
  });
  test('scorePosition should return 100000', () => {
    const points = scorePosition(5, 2, 0, 1, cpuWinHorizontallyGrid, 100000);
    expect(points).toBe(100000);
  });
});
