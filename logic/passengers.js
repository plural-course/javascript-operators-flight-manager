 function Passengers() {
     function checkFlightCapacity(flightCapacity, passengersArray){
        var totalNumberOfPassengers = passengersArray.reduce((a, b) => a + b, 0)

        if(totalNumberOfPassengers > flightCapacity){            
            throw new Error("error passengers");
        }else{
            return totalNumberOfPassengers;
        }
    }
    function distributeAllSeatsToAllPassengers(vipPassengers, regularPassengers, numberOfFlights, numberOfBusinessSeats, numberOfEconomySeats) {
            var vipPassengersWithBusinessSeats =0; 
            var vipPassengersWithEconomySeats=0;
            var regularPassengersWithBusinessSeats=0;
            var regularPassengersWithEconomySeats=0;
            var availableBusinessSeats = numberOfFlights * numberOfBusinessSeats;
            var availableEconomySeats = numberOfFlights * numberOfEconomySeats;

            vipBusinessConfig = {passengers:vipPassengers, seats: availableBusinessSeats};
            vipPassengersWithBusinessSeats = updateSeats(vipBusinessConfig, numberOfBusinessSeats);

            vipRegularConfig = {passengers:vipBusinessConfig.passengers, seats: availableEconomySeats};
            vipPassengersWithEconomySeats = updateSeats(vipRegularConfig, numberOfEconomySeats);

            regularBusinessConfig= { passengers: regularPassengers, seats: vipBusinessConfig.seats };
            regularPassengersWithBusinessSeats = updateSeats(regularBusinessConfig, numberOfBusinessSeats);

            regularEconomyConfig= { passengers: regularBusinessConfig.passengers, seats: vipRegularConfig.seats };
            regularPassengersWithEconomySeats = updateSeats(regularEconomyConfig, numberOfEconomySeats);
        


        var obj = {
            vipPassengersWithBusinessSeats: vipPassengersWithBusinessSeats,
            vipPassengerswithEconomySeats: vipPassengersWithEconomySeats,
            regularPassengersWithBusinessSeats: regularPassengersWithBusinessSeats,
            regularPassengersWithEconomySeats: regularPassengersWithEconomySeats
        }
        
        return obj;
    }

    function updateSeats (config, seatsPerFLight){
        let passengersWithSeats = 0;
        while(config.passengers > 0){
            if(config.seats > 0){
                if(config.passengers >= config.seats){
                    //jesli wiecej pasazerow od siedzen
                    
                    if(config.seats > seatsPerFLight){
                    //jesli wiecej siedzen ogolnych od siedzen na jeden lot
                    config.passengers -= seatsPerFLight;                    
                    config.seats -= seatsPerFLight;
                    passengersWithSeats += seatsPerFLight;
                    }else{
                    //jesli mniej siedzen ogolnych od siedzen na jeden lot
                    config.passengers -= config.seats;
                    passengersWithSeats += config.seats;
                    config.seats = 0;
                    }

                }else{
                    //jesli mniej pasazerow od siedzen
                    passengersWithSeats += config.passengers;
                    config.seats -= config.passengers;
                    config.passengers = 0;
                }
            }else{
                break;
            }
        }
        return passengersWithSeats;
    }

    return {checkFlightCapacity, distributeAllSeatsToAllPassengers};
}

module.exports = Passengers();