 function Passengers() {
     function checkFlightCapacity(flightCapacity, passengersArray){
        var totalNumberOfPassengers = passengersArray.reduce((a, b) => a + b, 0)
        if(totalNumberOfPassengers < flightCapacity){
            return totalNumberOfPassengers;
        }else{
            return Error;
        }
    }
    function distributeAllSeatsToAllPassengers(vipPassengers, regularPassengers, numberOfFlights, numberOfBusinessSeats, numberOfEconomySeats) {
            var vipPassengersWithBusinessSeats, 
            vipPassengerswithEconomySeats, 
            regularPassengersWithBusinessSeats, 
            regularPassengersWithEconomySeats;

        if(vipPassengers > numberOfBusinessSeats){
            vipPassengersWithBusinessSeats = vipPassengers - numberOfBusinessSeats;
            vipPassengers -= vipPassengersWithBusinessSeats;
            numberOfBusinessSeats = 0;

            if(vipPassengers > 0){
                numberOfEconomySeats -= vipPassengers;
                vipPassengerswithEconomySeats = vipPassengers;
                vipPassengers = 0;
            }
        }else {
            //vip
            vipPassengersWithBusinessSeats = numberOfBusinessSeats - vipPassengers;
            numberOfBusinessSeats -= vipPassengersWithBusinessSeats;
            //reuglar seats
                regularPassengersWithBusinessSeats = numberOfBusinessSeats;
                regularPassengers -= numberOfBusinessSeats;
                numberOfBusinessSeats = 0;
            regularPassengersWithEconomySeats = regularPassengers;
            numberOfEconomySeats -= regularPassengers
            
            
        }
        
        var obj = {
            vipPassengersWithBusinessSeats: vipPassengersWithBusinessSeats,
            vipPassengerswithEconomySeats: vipPassengerswithEconomySeats,
            regularPassengersWithBusinessSeats: regularPassengersWithBusinessSeats,
            regularPassengersWithEconomySeats: regularPassengersWithEconomySeats
        }
        

        return obj;
    }

    return {checkFlightCapacity, distributeAllSeatsToAllPassengers};
}

module.exports = Passengers();