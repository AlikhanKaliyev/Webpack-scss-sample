const modal = document.getElementById('myModal')

// Get the button that opens the modal
const btn = document.getElementById('myBtn')

const span = document.getElementsByClassName('close')[0]

btn.onclick = function () {
  modal.style.display = 'block'
  modal.style.opacity = '1'
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = 'none'
  modal.style.opacity = '0'
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = 'none'
  }
}
