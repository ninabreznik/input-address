var bel = require('bel')
var csjs = require('csjs-inject')
var validator = require('solidity-validator')

module.exports = displayAddressInput

function displayAddressInput({theme: {classes: css}, type, cb}) {

  const input = bel`
      <div class=${css.addressField}>
        <input class=${css.inputField} id=${type} oninput=${validate} placeholder='0x633...'>
      </div>`

  return input

  function validate (e) {
    var msg = validator.getMessage(type, e.target.value)
    if (msg) cb(msg)
    else cb(null)
  }

}
