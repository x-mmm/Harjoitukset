let car = {
    //Luodaan auton objekti
    merkki: "Toyota",
    malli: "Corolla",
    hevosvoimat: "169",
    valmistajanOsoite: "https://www.toyota.fi/",

    tulostaTiedot: function() {
        console.log(`Auto: ${this.merkki} ${this.malli}, ${this.hevosvoimat} hv`);

    }
};