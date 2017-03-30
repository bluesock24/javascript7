var text = 'Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.';
var animal = 'Zielone słonie';
var animalUpperCased = animal.toUpperCase();
var textChanged = text.replace('Papugi', animalUpperCased);
var length = text.length;
console.log(textChanged.substr(0, length/2));