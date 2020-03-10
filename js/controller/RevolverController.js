const revolver = new Revolver()

const atiraRevolver = (() => {
  if (revolver.temBala())
    revolver.atirar()
  document.querySelector('.qtdBalasRevolver').innerHTML = revolver.bala
  document.querySelector('.balaMaxRevolver').innerHTML = revolver.balaMax
  if (revolver.bala === 0) {
    document.querySelector('.qtdBalasRevolver').innerHTML = `Recarregue a bazuca, seu revolver tem ${revolver.bala} balas`
  }
  console.log(revolver)
})

const regarregaRevolver = (() => {
  document.querySelector('.revolverabug').classList.remove('hideRevolver')
  if (revolver.bala < revolver.balaMax)
    revolver.recarregar()
  document.querySelector('.qtdBalasRevolver').innerHTML = revolver.bala
  document.querySelector('.balaMaxRevolver').innerHTML = revolver.balaMax
  if (revolver.bala === revolver.balaMax) {
    document.querySelector('.qtdBalasRevolver').innerHTML = `O revolver já está carregado com ${revolver.bala} balas`
  }
  console.log(revolver)
})

const regarregaRevolverFull = (() => {
  document.querySelector('.revolverabug').classList.remove('hideRevolver')
  revolver.regarregarFull()
  document.querySelector('.qtdBalasRevolver').innerHTML = revolver.bala
  document.querySelector('.balaMaxRevolver').innerHTML = revolver.balaMax
  if (revolver.bala === revolver.balaMax) {
    document.querySelector('.qtdBalasRevolver').innerHTML = `O revolver já está carregado com ${revolver.bala} balas`
  }
  console.log(revolver)
})