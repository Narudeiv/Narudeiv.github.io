const app = document.getElementById('app')

const myRand = () => {
  let r = 50
  while (40 < r && r < 60) {
    r = Math.random() * 100
  }
  return r
}

for (let i = 0; i < 50; i++) {
  const delay = Math.random() + 's';
  const el = document.createElement('img')
  el.className      = 'glitter-star'
  el.style.top      = myRand() + '%'
  el.style.left     = myRand() + '%'
  el.style.animationDelay       = delay
  el.style.msAnimationDelay     = delay
  el.style.webkitAnimationDelay = delay
  el.style.monAnimationDelay    = delay
  app.appendChild(el)
}

const typed = new Typed('.typed', {
    stringsElement: '#cadenas-texto', 
	typeSpeed: 75, 
	startDelay: 300, 
	backSpeed: 75, 
	smartBackspace: true, 
	shuffle: false, 
	backDelay: 1500, 
	loop: true, 
	loopCount: false, 
	showCursor: true, 
	cursorChar: '|', 
	contentType: 'html', 
});

var granimInstance = new Granim({
  element: '#logo-canvas',
  direction: 'left-right',
  states : {
      "default-state": {
          gradients: [
              ['#EB3349', '#F45C43'],
              ['#FF8008', '#FFC837'],
              ['#4CB8C4', '#3CD3AD'],
              ['#24C6DC', '#514A9D'],
              ['#FF512F', '#DD2476'],
              ['#DA22FF', '#9733EE']
          ],
          transitionSpeed: 2000
      }
  }
});