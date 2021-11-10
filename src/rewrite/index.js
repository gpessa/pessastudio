const rewrite = [
  ["^contatto.php", "/it/contatti/"],
  ["^index.php", "/"],
  ["^azienda.php", "/"],
  ["^dressage.php", "/it/dressage/"],
  ["^dressage-economico.php", "/it/dressage/"],
  ["^dressage-standard.php", "/it/dressage/"],
  ["^ostacoli.php", "/it/ostacoli/"],
  ["^ostacoli-cavalletti.php", "/it/ostacoli/"],
  ["^ostacoli-candelieri.php", "/it/ostacoli/"],
  ["^ostacoli-barriere.php", "/it/ostacoli/"],
  ["^ostacoli-cucchiai.php", "/it/ostacoli/"],
  ["^ostacoli-fosso.php", "/it/ostacoli/"],
  ["^fondi-recinti.php", "/it/recinti/"],
  ["^recinti.php", "/it/recinti/"],
  ["^giostre.php", "/it/giostre/"],
  ["^giostra-ippowalker.php", "/it/giostre/ippowalker/"],
  ["^giostra-tecnoexerciser.php", "/it/giostre/tecnoexerciser/"],
  ["^tondini.php", "/it/tondini/"],
  ["^contatto.php", "/it/contatti/"],
].map(([from, to]) => `RewriteRule ${from} ${to} `)

const languages = [
  `
    RewriteCond %{HTTP:Accept-Language} ^fr [NC]
    RewriteRule ^$ https://www.pessastudio.fr/ [L,R=302]
  `
  //   `
  //   RewriteCond %{HTTP:Accept-Language} ^en [NC]
  //   RewriteRule ^$ /en/ [L,R=301]
  //   `, `
  //   RewriteCond %{HTTP:Accept-Language} ^fr [NC]
  //   RewriteRule ^$ /fr/ [L,R=301]
  //   `
]

module.exports = [...rewrite]
