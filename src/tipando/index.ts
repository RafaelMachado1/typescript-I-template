import { frota, TCarro } from "./frota"

function buscarCarrosPorMarca(frota: TCarro[], marca?: string): TCarro[] {
  if (marca === undefined) {
    return frota
  }

  return frota.filter(
    (carro) => {
      return carro.marca === marca
    }
  )
}

console.log(buscarCarrosPorMarca(frota))