function Flights() {
    function calculateNumberOfFlights(passengers, capacity) {
        let numberOfFlights;
        if ((passengers < 0) || (!Number.isInteger(Number(passengers)))) {
            throw new Error("The number of passengers must be a positive integer value")
        }

        if ((capacity < 0) || (!Number.isInteger(Number(capacity)))) {
            throw new Error("The capacity of the flight must be a positive integer value")
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

        if( totalDistance <= distanceLimit/2){
            return "The revision needs to be done within the next 3 months"
        }else if( totalDistance <= 3 * distanceLimit/4 ){
            return "The revision needs to be done within the next 2 months"
        }else if( totalDistance > 0.75 * distanceLimit && totalDistance <= distanceLimit ){
            return "The revision needs to be done within the next month"
        }else {
            throw new Error("Flight maximum allowed distance (" + distanceLimit + ") exceeded. No flight is allowed any longer, you need to make the revision immediately.");
        }

    }

    return {calculateNumberOfFlights, checkAircraftRevision};
}

module.exports = Flights();