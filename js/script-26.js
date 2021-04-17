function checkPassword(password) {
  // const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;
  
  message = password === 'ADMIN_PASSWORD' ? 'Доступ разрешен':'Доступ запрещен, неверный пароль!';
  
  return message;
}