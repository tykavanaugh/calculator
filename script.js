const buttonNameDict = {
  "clear":"CE",
  "divide":"/",
  "multi":"*",
  "minus":"-",
  "plus":"+",
  "equals":"=",
  "delete":"del",
  "zero":"0",
  "one":"1",
  "two":"2",
  "three":"3",
  "four":"4",
  "five":"5",
  "six":"6",
  "seven":"7",
  "eight":"8",
  "nine":"9",
}

let currentEq = []

const handleClick = (event) => {
  value = event.target.value
  if (['CE','del','='].includes(value)){
    if (value === 'CE'){
      currentEq = []
    }
    if (value === 'del'){
      currentEq.pop()
    }
    if (value === '='){}
  } else {
    currentEq.push(value)
  }
  updateDisplay()
}

const updateDisplay = () => {
  const displayText = document.getElementById('display-root')
  let tmpText = currentEq.join("")
  if (tmpText.length>10){
    tmpText = `_${tmpText.slice(tmpText.length-10)}`
  }
  displayText.innerText = tmpText
}

const setup = () => {
  const buttonRoot = document.getElementById('button-root')
  for (item in buttonNameDict){
    let calcButton = document.createElement('button')
    calcButton.classList.add(`button-${item}`)
    calcButton.classList.add(`calc-button`)
    calcButton.setAttribute('style',`grid-area: button-${item}`)
    calcButton.setAttribute('value',buttonNameDict[item])
    calcButton.innerHTML = buttonNameDict[item]
    calcButton.addEventListener('click',(event=>handleClick(event)))
    buttonRoot.appendChild(calcButton)
  }
}

const main = () => {
  setup()
}


window.onload = main