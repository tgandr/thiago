document.addEventListener('mouseover', (elem) => {
  const background = document.querySelector('.frame')
  if (elem.target.innerText == 'AQUICULTURA') {
    background.style.backgroundImage = "url('https://revistavetshare.com.br/wp-content/uploads/2021/10/shutterstock_1915187485.jpg')"
  } if (elem.target.innerText == 'ZOOTECNIA') {
    background.style.backgroundImage = "url('https://ak.picdn.net/shutterstock/videos/3852800/thumb/1.jpg')"
  } if (elem.target.innerText == 'PUBLICAÇÕES') {
    background.style.backgroundImage = "url('https://www.meatpoultrynutrition.org/sites/default/files/nutrition/library.jpg')"
  } if (elem.target.innerText == 'PROGRAMAÇÃO') {
    background.style.backgroundImage = "url('https://miro.medium.com/max/1400/0*Wz93rPzLLTq1VwVW')"
  }
});
