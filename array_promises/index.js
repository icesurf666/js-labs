const defaultHeaders = { 'Content-Type': 'application/json' }

const parseAllValues = (selector) => [...document.querySelectorAll(selector)].map(value => value.innerText)
const values = parseAllValues('#values li')
const URLs = parseAllValues('#urls li')
const resultEl = document.querySelector('#res')

let res = { result: 0 }

document
  .querySelector('button')
  .addEventListener('click', () => {
    values.forEach(async(value, i) => {
      const url = `${URLs[i]}${value}/${res.result}`
      res = await fetch(url, { headers: defaultHeaders }).then(resp => resp.json())
      resultEl.innerText = res.result
    })
  })