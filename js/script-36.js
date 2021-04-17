function checkForSpam(message) {
  let result;
  
  const normalizeMessage = message.toLowerCase();
  result = normalizeMessage.includes('spam') || normalizeMessage.includes('sale');
    
  return result;
}
  