function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {

  const message = `Вы заказали дроидов на сумму ${orderedQuantity * pricePerDroid + deliveryFee} кредитов. Доставка (${deliveryFee} кредитов) включена в сумму заказа.`

  return message;
}