// Exo 2
// Créer une function qui transforme n'importe quelle chaine de caractères avec la première lettre en majuscule
let majFirstString = (a) => {
    let b = a.substr(0,1).toUpperCase() + a.substr(1);
    return b;
}

// Exo 3
// Créer une function qui push des éléments dans un tableau du nom de tab01 et afficher le tableau
let tableauPushInTab = [];
let pushInTab = (x) => {
    tableauPushInTab.push(x);
    return tableauPushInTab;
}

