function Flights() {
    function calculateNumberOfFlights(passengers, capacity) {
        var numberOfFlights = 0;
        if( passengers < 0 ){
            throw "The number of passengers must be a positive integer value";
        }
        if( capacity < 0 ){
            "The capacity of the flight must be a positive integer value";
        }

        if(passengers % capacity == 0){
            numberOfFlights = passengers/capacity;
        }else{
            numberOfFlights = Math.ceil(passengers/capacity);
        }

        return numberOfFlights;
    }
    function checkAircraftRevision(distanceLimit, distancesArray){
        totalDistance = distancesArray.reduce((a, b) => a + b, 0);

        if( totalDistance <= 0.5 * distanceLimit){
            return "The revision needs to be done within the next 3 months";
        }else if( totalDistance <= 0.75 * distanceLimit ){
            return "The revision needs to be done within the next 3 months";
        }else if( totalDistance > 0.75 * distanceLimit && totalDistance <= distanceLimit ){
            return "The revision needs to be done within the next month";
        }else {
            throw Error;
        }

    }

    return {calculateNumberOfFlights, checkAircraftRevision};
}

module.exports = Flights();