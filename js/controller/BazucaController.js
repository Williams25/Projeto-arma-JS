const bazuca = new Bazuca()

const atiraBazuca = (() => {
  bazuca.atirar()
  document.querySelector('.qtdBalasBazuca').innerHTML = bazuca.bala
  document.querySelector('.balaMaxBazuca').innerHTML = bazuca.balaMax
  if (bazuca.bala === 0) {
    document.querySelector('.qtdBalasBazuca').innerHTML = `Recarregue a bazuca, sua arma tem ${bazuca.bala} balas`
  }
  console.log(bazuca)
})

const regarregaBazuca = (() => {
  document.querySelector('.bazucabug').classList.remove('hideBazuca')
  bazuca.recarregar()
  document.querySelector('.qtdBalasBazuca').innerHTML = bazuca.bala
  document.querySelector('.balaMaxBazuca').innerHTML = bazuca.balaMax
  if (bazuca.bala === bazuca.balaMax) {
    document.querySelector('.qtdBalasBazuca').innerHTML = `A bazuca já está carregado com ${bazuca.bala} balas`
  }
  console.log(bazuca)
})

const regarregaBazucaFull = (() => {
  document.querySelector('.bazucabug').classList.remove('hideBazuca')
  bazuca.regarregarFull()
  document.querySelector('.qtdBalasBazuca').innerHTML = bazuca.bala
  document.querySelector('.balaMaxBazuca').innerHTML = bazuca.balaMax
  if (bazuca.bala === bazuca.balaMax) {
    document.querySelector('.qtdBalasBazuca').innerHTML = `A bazuca já está carregado com ${bazuca.bala} balas`
  }
  console.log(bazuca)
})