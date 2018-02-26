var program=["Programme","Logiciel","Service","Système","Site+web","App","Technique"];
var way=["vente+directe","vendre+ligne","commande","commander"];
var prod=["fruit","légumes", "panier", "maraicher","maraichage", "produits"];

program.forEach(p=>way.forEach(w=>prod.forEach(t=>console.log([p,w,t].join('+')))))
