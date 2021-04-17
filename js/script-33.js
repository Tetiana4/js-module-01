function formatMessage(message, maxLength) {
    let result;
    
   if(message.length <= maxLength) {
     result = message;
   } else {
     message = message.slice(0, maxLength) + '...';
     result = message
   }    
  return result;
}
 