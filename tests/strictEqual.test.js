const describe = require('mocha').describe
const it = require('mocha').it
const expect = require('chai').expect
const strictEqual = require('../calculate')


describe('calculate', () => {
  describe('strictEqual', () => {
    it('returns true if the numbers are equal to one another', () => {
      const num1 = 5
      const num2 = 5
      const answer = strictEqual(num1, num2)

      expect(answer).to.equal(true)
    })

    it('returns false if numbers are different types regardless of value', () => {
      const num1 = 5
      const num2 = '5'
      const answer = strictEqual(num1, num2)

      expect(answer).to.equal(false)
    })

    it('returns false if numbers are different values', () => {
      const num1 = 5
      const num2 = 9
      const answer = strictEqual(num1, num2)

      expect(answer).to.equal(false)
    })

    it('returns false if the numbers are not of same type or same value', () => {
      const num1 = 5
      const num2 = 'excruciating'
      const answer = strictEqual(num1, num2)

      expect(answer).to.equal(false)
    })
  })
})
