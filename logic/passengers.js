 function Passengers() {
     function checkFlightCapacity(flightCapacity, passengersArray){
        var totalNumberOfPassengers = passengersArray.reduce((a, b) => a + b, 0)

        if(totalNumberOfPassengers > flightCapacity){            
            return new Error("error passengers");
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
        
        console.log(obj);
        return obj;
    }

    function updateSeats (config, seatsPerFLight){
        let passengersWithSeats = 0;
        console.log('config' + JSON.stringify(config) + ' siedzenia na lot: ' + seatsPerFLight);
        while(config.passengers > 0){
            if(config.seats > 0){
                if(config.passengers >= config.seats){
                    //jesli wiecej pasazerow od siedzen
                    
                    if(config.seats > seatsPerFLight){
                    //jesli wiecej siedzen ogolnych od siedzen na jeden lot
                    console.log('wiecej pasazerow od siedzen');
                    config.passengers -= seatsPerFLight;                    
                    config.seats -= seatsPerFLight;
                    passengersWithSeats += seatsPerFLight;

                    console.log('config.passengers: ' + config.passengers + 'config.seats ' + config.seats
                    + 'seats per flight: ' + seatsPerFLight+ ' passengersWithSeats: ' + passengersWithSeats);
                    }else{
                    //jesli mniej siedzen ogolnych od siedzen na jeden lot
                    config.passengers -= config.seats;
                    passengersWithSeats += config.seats;
                    config.seats = 0;
                    console.log('JESLI MNIEJ SIEDZEN OGOLNYCH NIZ TYCH NA JEDEN LOT');
                    console.log('config.passengers: ' + config.passengers + '  config.seats ' + config.seats);
                    

                    console.log('config.passengers: ' + config.passengers + 'config.seats ' + config.seats
                    + 'seats per flight: ' + config.seatsPerFLight+ ' passengersWithSeats: ' + passengersWithSeats);
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
        console.log(' passangers with seats: ' + passengersWithSeats);
        console.log(' passangers : ' + config.passengers);
        return passengersWithSeats;
    }

    return {checkFlightCapacity, distributeAllSeatsToAllPassengers};
}

module.exports = Passengers();