/* eslint-env mocha */
require('..')

const expect = require('expect')
const fs = require('fs')
const path = require('path')

const write = true // !!process.env.JSONC_WRITE

const readJson = (fname, folder) => {
  const fpath = path.resolve(__dirname, folder || 'expected', fname)

  return fs.readFileSync(fpath, 'utf8')
}

const loadJson = (fname, noWrite) => {
  const fpath = path.resolve(__dirname, 'fixtures', fname)
  const jsonc = require(fpath)

  if (write && noWrite !== false) {
    const fout = path.resolve(__dirname, 'expected', fname)
    fs.writeFileSync(fout, JSON.stringify(jsonc), 'utf8')
  }

  return JSON.stringify(jsonc)
}

describe('parse regular json', function () {
  const files = [
    '01.json',
    '02-empty.json',
    '03-none.json',
    '04.jsonc',
  ]

  it('with no problems', () => {
    const result = loadJson(files[0])
    const expected = readJson(files[0])

    expect(result).toBe(expected)
  })

  it('empty json object', () => {
    const result = loadJson(files[1])
    const expected = readJson(files[1])

    expect(result).toBe(expected)
  })

  it('without content (error)', () => {
    expect(() => {
      loadJson(files[2], false)
    }).toThrow()
  })

  it('with jsonc extension', () => {
    const result = loadJson(files[3])
    const expected = readJson(files[3])

    expect(result).toBe(expected)
  })

})


describe('with comment blocks', function () {
  const files = [
    '10-simple-blocks.json',
    '11-multiline.json',
    '12-multiline-2.json',
    '13-multiline-out.json',
  ]

  it('simple blocks', () => {
    const result = loadJson(files[0])
    const expected = readJson(files[0])

    expect(result).toBe(expected)
  })

  it('multiline', () => {
    const result = loadJson(files[1])
    const expected = readJson(files[1])

    expect(result).toBe(expected)
  })

  it('multiline 2', () => {
    const result = loadJson(files[2])
    const expected = readJson(files[2])

    expect(result).toBe(expected)
  })

  it('multiline outter', () => {
    const result = loadJson(files[2])
    const expected = readJson(files[2])

    expect(result).toBe(expected)
  })

})

describe('with single-line comments', function () {
  const files = [
    '20-single.json',
    '21-single-out.json',
  ]

  it('multiple', () => {
    const result = loadJson(files[0])
    const expected = readJson(files[0])

    expect(result).toBe(expected)
  })

  it('with outer comments', () => {
    const result = loadJson(files[1])
    const expected = readJson(files[1])

    expect(result).toBe(expected)
  })

})

describe('with trailing commas', function () {
  const files = [
    '30-simple.json',
    '31-doubles.json',
  ]

  it('simple', () => {
    const result = loadJson(files[0])
    const expected = readJson(files[0])

    expect(result).toBe(expected)
  })

  it('doubles (error)', () => {
    expect(() => {
      loadJson(files[1], false)
    }).toThrow()
  })

})


describe('with single-line comments', function () {
  const files = [
    '20-single.json',
    '21-single-out.json',
  ]

  it('multiple', () => {
    const result = loadJson(files[0])
    const expected = readJson(files[0])

    expect(result).toBe(expected)
  })

  it('with outer comments', () => {
    const result = loadJson(files[1])
    const expected = readJson(files[1])

    expect(result).toBe(expected)
  })

})

describe('all of above', function () {
  const files = [
    '40-complex-1.json',
    '41-complex-2.json',
  ]

  it('complex 1', () => {
    const result = loadJson(files[0])
    const expected = readJson(files[0])

    expect(result).toBe(expected)
  })

  it('complex 2', () => {
    const result = loadJson(files[1])
    const expected = readJson(files[1])

    expect(result).toBe(expected)
  })

})
