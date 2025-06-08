function calculateChaiIngredients(numberOfCups) {
    const waterPerCup = 200; 
    const milkPerCup = 50; 
    const teaLeavesPerCup = 1; 
    const sugarPerCup = 2; 

    
    let totalWater = numberOfCups * waterPerCup;
    let totalMilk = numberOfCups * milkPerCup;
    let totalTeaLeaves = numberOfCups * teaLeavesPerCup;
    let totalSugar = numberOfCups * sugarPerCup;

    
    console.log(`To make ${numberOfCups} cups of Kenyan Chai, you will need:`);
    console.log(`Water: ${totalWater} ml`);
    console.log(`Milk: ${totalMilk} ml`);
    console.log(`Tea Leaves (Majani): ${totalTeaLeaves} tablespoons`);
    console.log(`Sugar (Sukari): ${totalSugar} teaspoons`);
    console.log("Enjoy your Chai Bora!");
}


let userCups = parseInt(prompt("Karibu! How many cups of Chai Bora would you like to make?"), 10);

if (!isNaN(userCups) && userCups > 0) {
    calculateChaiIngredients(userCups);
} else {
    console.log("Tafadhali ingiza namba halali kwa idadi ya vikombe.");
}
