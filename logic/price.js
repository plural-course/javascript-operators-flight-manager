"use strict"
function Prices() {
    function calculateFinalPrice(basePrice, variationOfPassengerType, variationOfFlightType){
        let finalPrice = basePrice;

        finalPrice *= 1+variationOfPassengerType/100;
        finalPrice *= 1+variationOfFlightType/100;

        return finalPrice.toFixed(2);
    }
    function calculateDefaultFinalPrice(basePrice, passengerType, flightType) {
        let finalPrice= basePrice;

        switch(passengerType.toUpperCase()){
            case 'REGULAR':
                finalPrice *= 1+(-5/100);
                break;
            case 'VIP' :
                finalPrice *= 1+(+5/100);
                break;
        }
        switch(flightType.toUpperCase()){
            case 'ECONOMY':
                finalPrice *= 1+(-3/100);
                break;
            case 'BUSINESS' :
                finalPrice *= 1+(+10/100);
                break;
        }
        return finalPrice.toFixed(2);
    }
    
    function calculateTotalFinalPrice(nrOfSeats, passengerType, flightType, basePrice) {
        let finalPrice = nrOfSeats * calculateDefaultFinalPrice(basePrice, passengerType, flightType);

        return finalPrice;
    }

    return {calculateFinalPrice, calculateDefaultFinalPrice, calculateTotalFinalPrice}
}

module.exports = Prices();