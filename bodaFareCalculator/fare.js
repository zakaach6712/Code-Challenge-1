function calculateBodaFare(distanceInKm) {
    const baseFare = 50; 
    const chargePerKm = 15; 
    
    
    let totalFare = baseFare + (distanceInKm * chargePerKm);

    
    console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
    console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
    console.log(`Mpaka Uko: KES ${distanceInKm * chargePerKm}`);
    console.log(`Total: KES ${totalFare}`);
    console.log("Panda Pikipiki!");
}


let userDistance = parseFloat(prompt("Unafika wapi Mkubwa? Kilometer ngapi?:"));

if (!isNaN(userDistance) && userDistance > 0) {
    calculateBodaFare(userDistance);
} else {
    console.log("Tafadhali ingiza namba halali kwa umbali wa safari.");
}
