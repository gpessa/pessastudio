const PRODUCT_IDS: string[] = [
  "ostacoli",
  "recinti",
  "tondini",
  "giostre",
  "dressage",
]

const PAGES_IDS: string[] = [...PRODUCT_IDS, "contatti"]

enum Colors {
  YELLOW = "#FEB00D",
  GREEN = "#316330",
  WHITE = "#FFFFF",
  BLU = "#264FD0",
  RED = "#F41701",
}

enum Position {
  BOTTOM = "bottom",
  RIGHT = "right",
  LEFT = "left",
  TOP = "top",
}

export { PRODUCT_IDS, PAGES_IDS, Colors, Position }
