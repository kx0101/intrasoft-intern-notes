// arguments object - no longer bound with arrow functions

const add = (a, b) => {
    // console.log(arguments) won't work because we're dealing with an arrow function
    return a + b;
}

console.log(add(55, 1));

// this keyword - no longer bound

const user = {
    name: 'Liakos',
    cities: ['Giannitsa', 'Pella'],
    printPlacesLived() {
        // console.log(this.name) // I have access if it's NOT an arrow function
        // console.log(this.cities);

        return this.cities.map(city => this.name = ' has lived in ' + city)

        this.cities.forEach(function (city) {
            // console.log(this.name + ' has lived in ' + city); // name undefined
        })

        this.cities.forEach(city => {
            console.log(this.name + ' has lived in ' + city);
        })
    }
};

console.log(user.printPlacesLived());