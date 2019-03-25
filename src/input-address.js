const bel = require('bel')
const csjs = require('csjs-inject')
const validator = require('solidity-validator')

module.exports = displayAddressInput

function displayAddressInput ({ theme: { classes: css }, cb }) {
  const input = bel`<div class=${css.addressField}>
    <input class=${css.inputField} data-type="address" oninput=${validate} placeholder='0x633...'>
  </div>`
  return input
  function validate (e) {
    const value = e.target.value
    cb(validator.getMessage('address', value), value)
  }
}
