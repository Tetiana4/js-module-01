function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
  let message;
  
const totalPrice = pricePerDroid * orderedQuantity;
  
  if(customerCredits >= totalPrice){
    message = `Вы купили ${orderedQuantity} дроидов, на счету осталось ${customerCredits - totalPrice} кредитов`;
  } else {
    message = `Недостаточно средств на счету!`;
  }
  
  return message;
}