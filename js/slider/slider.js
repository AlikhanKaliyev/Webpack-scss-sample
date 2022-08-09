(function () { // function expression closure to contain variables
  let i = 0
  const pics = ['../../img/header.png', '../../img/ksk-desktop.png']
  const el = document.getElementById('img_to_flip') // el doesn't change
  function toggle () {
    el.src = pics[i] // set the image
    i = (i + 1) % pics.length // update the counter
  }
  setInterval(toggle, 2000)
})()
