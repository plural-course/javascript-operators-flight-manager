function Util() {
    function calculateTotalDistributedPassengers(distributedPassengers){
        var totalPassengers = 0;
        for (var property in distributedPassengers) {
            totalPassengers += distributedPassengers[property];
        }

        return totalPassengers;
    }

    function calculateTotalNumberOfPassengers(arrayOfPassengers) {
        return arrayOfPassengers.reduce((a, b) => a + b, 0);
    }

    return {calculateTotalDistributedPassengers, calculateTotalNumberOfPassengers}
}

module.exports = Util();

