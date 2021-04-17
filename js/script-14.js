function isValidPassword(password) {
  const SAVED_PASSWORD = 'jqueryismyjam';
  
  const isMatch = password === SAVED_PASSWORD;

  return isMatch;
}