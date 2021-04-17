function checkStorage(available, ordered) {
  let message;
  
  message = ordered > available ? 'На складе недостаточно товаров!':'Заказ оформлен, с вами свяжется менеджер';
  
  return message;
}