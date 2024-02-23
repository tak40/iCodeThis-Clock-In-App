/** @format */

const modal = document.querySelector('.modal')
const btnOpenModal = document.getElementById('add-hours-button')
const btnCancel = document.querySelector('.cancel-btn')
const hourForm = document.getElementById('hour-form')
const input = document.getElementById('hour-number')
const minusButton = document.getElementById('minus-btn')
const plusButton = document.getElementById('plus-btn')
const hoursInfo = document.getElementById('hours-info')

// Open the modal when the user clicks the button
btnOpenModal.addEventListener('click', () => {
    modal.style.display = 'flex'
    hoursInfo.style.display = 'none'
})

// Close the modal when the user clicks on the cancel button
btnCancel.addEventListener('click', () => {
    modal.style.display = 'none'
    hoursInfo.style.display = 'flex'
})

// When the user submits the form
hourForm.addEventListener('submit', event => {
    event.preventDefault()
    modal.style.display = 'none'
    hoursInfo.style.display = 'flex'
})

minusButton.addEventListener('click', () => {
    const currentValue = +input.value
    if (currentValue > 1) {
        input.value = currentValue - 1
    }
})

plusButton.addEventListener('click', () => {
    const currentValue = +input.value
    input.value = currentValue + 1
})
