"use strict"
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
    function checkInput(inputValue){
        if(isNaN(inputValue) || !inputValue){
            throw new Error('null or not a number');
        }
        return true;
    }
    function calculateTotalDistance(distances) {
        let isPositive = n => n > 0 ? n : 0;
        let array = distances.reduce((a, b) => 
            isPositive(a) + isPositive(b)
        )
        return array;        
    }

    function calculateBonusPoints(distanceOfBusinessSeats, distanceOfEconomySeats, businessPercent, economyPercent) {
        let totalBonusPoints = 0;
        let businessPoints = 0, economyPoints = 0;

        businessPoints = (calculateTotalDistance(distanceOfBusinessSeats) * businessPercent)/100  ;
        economyPoints = (calculateTotalDistance(distanceOfEconomySeats) * economyPercent)/100;
        totalBonusPoints = businessPoints + economyPoints;

        return totalBonusPoints;
    }

    return {calculateTotalDistributedPassengers, calculateTotalNumberOfPassengers, checkInput,
         calculateTotalDistance, calculateBonusPoints}
}


module.exports = Util();

