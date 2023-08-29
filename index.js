/**
 * The main script file of the application.
 *
 * @author Beata Eriksson <be222gr@student.lnu.se>
 * @version 1.0.0
 */

const form = document.querySelector('#name-form')
form.addEventListener('submit', handleSubmit)

function handleSubmit (event) {
    event.preventDefault()
    const inputElement = form.querySelector('#your-name')

    const result = document.querySelector('#result')
    if (result.childElementCount > 0) {
        result.removeChild(result.firstElementChild)
    }

    const newP = document.createElement('p')
    newP.textContent = inputElement.value
    result.appendChild(newP)
    calcNumber(inputElement.value)
    inputElement.value = ''
}

function calcNumber (string) {
    const nameArray = string.split('')
    const numberArray = []
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r' ,'s', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'å', 'ä', 'ö']
    for (let i = 0; i < nameArray.length; i++) {
        numberArray.push(letters.indexOf(nameArray[i]) + 1)
    }
    console.log(numberArray)
}