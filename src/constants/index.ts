const PRODUCT_IDS: string[] = ["ostacoli", "recinti", "tondini", "giostre", "dressage"]
const LEGAL_IDS: string[] = ['cookie-policy']
const PAGES_IDS: string[] = [...PRODUCT_IDS, "contatti"]

const SOCIALS = {
  facebook: { label: 'Facebook', href: "https://www.facebook.com/Pessastudio-HORSE-Tecnology-1050570271816027/" },
  instagram: { label: 'Instagram', href: "https://www.instagram.com/pessastudiohorsetecnology" }
}

enum Colors {
  YELLOW = "#FEB00D",
  GREEN = "#316330",
  WHITE = "#FFFFFF",
  BLU = "#264FD0",
  RED = "#F41701",
}

enum Ratio {
  HORIZONTAL = "horizontal",
  VERTICAL = "vertical",
  SQUARE = "square",
}

enum Position {
  BOTTOM = "bottom",
  RIGHT = "right",
  LEFT = "left",
  TOP = "top",
}

enum Material {
  ACCIAIO_ZINCATO = "acciaio-zincato",
  POLIPROPILENE = "polipropilene",
  POLIETILENE = "polietilene",
  PLASTICA = "plastica",
  TECNOPOLIMERO = "tecnopolimero",
}

export { PRODUCT_IDS, SOCIALS, PAGES_IDS, LEGAL_IDS, Colors, Position, Ratio, Material }
