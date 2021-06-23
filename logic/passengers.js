"use strict"
 function Passengers() {
     function checkFlightCapacity(flightCapacity, passengersArray){
        var totalNumberOfPassengers = passengersArray.reduce((a, b) => a + b, 0)

        if(totalNumberOfPassengers > flightCapacity){            
            throw new Error("error passengers");
        }else{
            return totalNumberOfPassengers;
        }
    }
    function distributeAllSeatsToAllPassengers(vipPassengers, regularPassengers,
         numberOfFlights, numberOfBusinessSeats, numberOfEconomySeats) {
             
            let vipPassengersWithBusinessSeats =0; 
            let vipPassengersWithEconomySeats=0;
            let regularPassengersWithBusinessSeats=0;
            let regularPassengersWithEconomySeats=0;
            let availableBusinessSeats = numberOfFlights * numberOfBusinessSeats;
            let availableEconomySeats = numberOfFlights * numberOfEconomySeats;

            var vipBusinessConfig = {passengers:vipPassengers, seats: availableBusinessSeats};
            vipPassengersWithBusinessSeats = updateSeats(vipBusinessConfig, numberOfBusinessSeats);

            var vipRegularConfig = {passengers:vipBusinessConfig.passengers, seats: availableEconomySeats};
            vipPassengersWithEconomySeats = updateSeats(vipRegularConfig, numberOfEconomySeats);

            var regularBusinessConfig= { passengers: regularPassengers, seats: vipBusinessConfig.seats };
            regularPassengersWithBusinessSeats = updateSeats(regularBusinessConfig, numberOfBusinessSeats);

            var regularEconomyConfig= { passengers: regularBusinessConfig.passengers, seats: vipRegularConfig.seats };
            regularPassengersWithEconomySeats = updateSeats(regularEconomyConfig, numberOfEconomySeats);
        


        return{
            vipPassengersWithBusinessSeats: vipPassengersWithBusinessSeats,
            vipPassengersWithEconomySeats: vipPassengersWithEconomySeats,
            regularPassengersWithBusinessSeats: regularPassengersWithBusinessSeats,
            regularPassengersWithEconomySeats: regularPassengersWithEconomySeats
        };
    }

    function updateSeats (config, seatsPerFLight){
        let passengersWithSeats = 0;
        
        while(config.passengers > 0){
            if(config.seats > 0){
                if(config.passengers >= config.seats){
                    //jesli wiecej pasazerow od siedzen                    
                    if(config.seats > config.seatsPerFLight){
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