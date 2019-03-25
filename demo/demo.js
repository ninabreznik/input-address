const csjs = require('csjs-inject')
const inputaddress = require('../')

document.body.innerHTML = `<style>
.addressField {
  width: 300px;
}
.inputField {
  border: 1px solid #cfcfcf;
  padding: 5px;
}
.inputField::placeholder {
  color: blue;
}
</style>`

const classes = { addressField: 'addressField', inputField: 'inputField' }

const log = document.createElement('pre')
const el = inputaddress({ theme: { classes }, cb: (err, val) => {
  if (err) log.appendChild(document.createTextNode(`${err}\n`))
  else log.appendChild(document.createTextNode(`ok: ${val}\n`))
} })
document.body.appendChild(el)
document.body.appendChild(log)
