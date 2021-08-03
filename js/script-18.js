function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
  let message;
  
const totalPrice = pricePerDroid * orderedQuantity;
  
  if(customerCredits >= totalPrice){
    message = `Вы купили ${orderedQuantity} дроидов, на счету осталось ${customerCredits - totalPrice} кредитов`;
  } else {
    message = `Недостаточно средств на счету!`;
  }
  
  // or
  
  // if(totalPrice > customerCredits){
  //   message = `Insufficient funds!`
  // } else {
  //   message = `You ordered ${orderedQuantity} droids, you have ${customerCredits - totalPrice} credits left`;
  // }

  return message;
}