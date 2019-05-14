'use strict';

const arithmetic = require('../lib/arithmetic.js');

describe('Addition', () => {
  it('adds an array of numbers', () => {
    const nums = [2, 5, 10];
    expect(arithmetic.add(nums)).toEqual(17);
  });
  it('will not work if array contains non-number values', () => {
    const nums = [2, 5, 'ten'];
    expect(arithmetic.add(nums)).toBeNull();
  });
});

describe('Subtraction', () => {
  it('subtracts an array of numbers', () => {
    const nums = [2, 5, 10];
    expect(arithmetic.subtract(nums)).toEqual(-13);
  });
  it('will not work if array contains non-number values', () => {
    const nums = [2, 5, 'ten'];
    expect(arithmetic.subtract(nums)).toBeNull();
  });
});

describe('Multiplication', () => {
  it('multiplies an array of numbers', () => {
    const nums = [2, 5, 10];
    expect(arithmetic.multiply(nums)).toEqual(100);
  });
  it('will not work if array contains non-number values', () => {
    const nums = [2, 5, 'ten'];
    expect(arithmetic.multiply(nums)).toBeNull();
  });
});

describe('Division', () => {
  it('adds an array of numbers', () => {
    const nums = [10, 5, 2];
    expect(arithmetic.divide(nums)).toEqual(1);
  });
  it('will not work if array contains non-number values', () => {
    const nums = [2, 5, 'ten'];
    expect(arithmetic.divide(nums)).toBeNull();
  });
  it('will not divide by 0', () => {
    const nums = [3, 0, 12];
    expect(arithmetic.divide(nums)).toEqual('Cannot divide by zero');
  });
});