const rewrite = [
  ["^contatto.php", "/it/contatti/"],
  ["^index.php", "/it"],
  ["^azienda.php", "/it"],
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
].map(
  ([from, to]) => `
    RewriteRule ${from} ${to} [R=301,L,NE]`
)

const languages = [
  `
    RewriteCond %{HTTP:Accept-Language} ^it [NC]
    RewriteRule ^$ /it/ [L,R=301,NE]`,
  `
    RewriteCond %{HTTP:Accept-Language} ^fr [NC]
    RewriteRule ^$ /fr/ [L,R=301,NE]`,
  `
    # Redirect /en se lingua non selezionata
    RewriteEngine On
    RewriteRule ^$ /en/ [L,R=302]`,
]

module.exports = [...rewrite, ...languages]
