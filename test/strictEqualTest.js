let describe = require('mocha').describe
let it = require('mocha').it
let expect = require('chai').expect
let strictEqual = require('../calculate')

describe('strictEqual', () => {
  describe('strictEqual', () => {
    it('returns true if the numbers are equal to one another', () => {
      const num1 = 5
      const num2 = 5
      let answer = strictEqual(num1, num2)

      expect(answer).to.equal(true)
    })

    it('returns false if numbers are different types regardless of value', () => {
      const num1 = 5
      const num2 = '5'
      let answer = strictEqual(num1, num2)

      expect(answer).to.equal(false)
    })

    it('returns false if numbers are different values', () => {
      const num1 = 5
      const num2 = 9
      let answer = strictEqual(num1, num2)

      expect(answer).to.equal(false)
    })

    it('returns false if the numbers are not of same type or same value', () => {
      const num1 = 5
      const num2 = 'excruciating'
      let answer = strictEqual(num1, num2)

      expect(answer).to.equal(false)
    })
  })
})
