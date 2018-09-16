var bel = require('bel')
var csjs = require('csjs-inject')

module.exports = displayAddressInput

function displayAddressInput({theme: {classes: css}, type}) {
  return bel`
      <div class=${css.addressField}>
        <input class=${css.inputField} placeholder='0x6e2...'>
      </div>`
}
