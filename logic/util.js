function Util() {
    function calculateTotalDistributedPassengers(vipPassengers, regularPassengers, numberOfFlights, numberOfBusinessSeats, numberOfEconomySeats){
        var obj = distributeAllSeatsToAllPassengers(vipPassengers, regularPassengers, numberOfFlights, numberOfBusinessSeats, numberOfEconomySeats);
        var totalPassengers = 0;
        for (var property in obj) {
            totalPassengers += object[property];
        }

        return totalPassengers;
    }

    function calculateTotalNumberOfPassengers(arrayOfPassengers) {
        return arrayOfPassengers.reduce((a, b) => a + b, 0);
    }

    return {calculateTotalDistributedPassengers, calculateTotalNumberOfPassengers}
}

module.exports = Util();

