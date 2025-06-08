function estimateTransactionFee(amountToSend) {
    const feePercentage = 0.015; 
    const minFee = 10; 
    const maxFee = 70; 


    let calculatedFee = amountToSend * feePercentage;

    
    let finalFee = Math.min(Math.max(calculatedFee, minFee), maxFee);

    
    let totalAmount = amountToSend + finalFee;

    
    console.log(`Sending KES ${amountToSend}:`);
    console.log(`Calculated Transaction Fee: KES ${finalFee}`);
    console.log(`Total amount to be debited: KES ${totalAmount}`);
    console.log("Send Money Securely!");
}


let userAmount = parseFloat(prompt("Unatuma Ngapi? (KES):"));

if (!isNaN(userAmount) && userAmount > 0) {
    estimateTransactionFee(userAmount);
} else {
    console.log("Tafadhali ingiza kiasi halali cha pesa.");
}
