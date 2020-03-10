class Arma {
  constructor(balaMax) {
    this.balaMax = balaMax
    this.bala = this.balaMax
    this.calibre = 0
  }

  atirar() {
    this.bala -= 1
  }

  recarregar() {
    return this.bala += 1
  }

  regarregarFull() {
    return this.bala = this.balaMax
  }

  temBala() {
    return this.bala > 0
  }

  estaTotalmenteCarregado() {
    return this.bala === this.balaMax
  }

  toString() {
    return `balaMax${this.balaMax};bala${this.bala};calibre${this.calibre}`
  }
}