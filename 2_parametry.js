let soucet = (cislo1, cislo2) => {
    console.log(cislo1 + cislo2);
}

soucet(10, 15);

console.log("------------------")

let adultChecker = (age) => {
    if (age >= 18) {
        return "dospělý";
    } else {
        return "dítě";
    }
}

if (adultChecker(19) === "dospělý") {
    console.log("Výsledek: dospělý");
    console.log("Vstupte.");
} else {
    console.log("Výsledek: dítě");
    console.log("Nevstupuj!");
}

console.log(adultChecker(21));
console.log(adultChecker(15));


let newComment = (name = "Anonym", comm) => {
    console.log(name);
    console.log(comm)
}

newComment(undefined, "komentář");



let stringos = (name, name2) => {
    console.log(`Ahoj, já jsem ${name}, ale kámoši mi říkají ${name2}`);
}

stringos("Karel", "Kapitán Kája");