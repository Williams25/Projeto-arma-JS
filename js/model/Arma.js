class Arma {
  constructor(balaMax) {
    this.balaMax = balaMax
    this.bala = this.balaMax
    this.calibre = 0
  }

  atirar() {
    if (this.bala > 0) {
      this.bala -= 1
    }
  }

  recarregar() {
    if (this.bala < this.balaMax) {
      return this.bala += 1
    } else {
      return `A arma esta carregada com ${this.bala}`
    }
  }

  regarregarFull() {
    if (this.bala === this.balaMax) {
      return `A arma esta carregada com ${this.bala}`
    } else {
      return this.bala = this.balaMax
    }
  }

  toString() {
    return `balaMax${this.balaMax};bala${this.bala};calibre${this.calibre}`
  }
}