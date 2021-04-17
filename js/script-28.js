function checkPassword(password) {
  // const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;
  switch (password){      
    case null: 
      message = 'Отменено пользователем!';
      break;
    
    case 'jqueryismyjam': 
      message = 'Добро пожаловать!';
      break;
         
    default:
      message = 'Доступ запрещен, неверный пароль!';
  } 
  return message;
}
