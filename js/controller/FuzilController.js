const fuzil = new Fuzil()

const atiraFuzil = (() => {
  fuzil.atirar()
  document.querySelector('.qtdBalasFuzil').innerHTML = fuzil.bala
  document.querySelector('.balaMaxFuzil').innerHTML = fuzil.balaMax
  if (fuzil.bala == 0) {
    document.querySelector('.qtdBalasFuzil').innerHTML = `Recarregue o fuzil, sua arma tem ${fuzil.bala} balas`
  }
  console.log(fuzil)
})

const regarregaFuzil = (() => {
  document.querySelector('img').classList.remove('hideFuzil')
  fuzil.recarregar()
  document.querySelector('.qtdBalasFuzil').innerHTML = fuzil.bala
  document.querySelector('.balaMaxFuzil').innerHTML = fuzil.balaMax
  if (fuzil.bala === fuzil.balaMax) {
    document.querySelector('.qtdBalasFuzil').innerHTML = `O fuzil já está carregado com ${fuzil.bala} balas`
  }
  console.log(fuzil)
})

const regarregaFuzilFull = (() => {
  document.querySelector('img').classList.remove('hideFuzil')
  fuzil.regarregarFull()
  document.querySelector('.qtdBalasFuzil').innerHTML = fuzil.bala
  document.querySelector('.balaMaxFuzil').innerHTML = fuzil.balaMax
  if (fuzil.bala === fuzil.balaMax) {
    document.querySelector('.qtdBalasFuzil').innerHTML = `O fuzil já está carregado com ${fuzil.bala} balas`
  }
  console.log(fuzil)
})