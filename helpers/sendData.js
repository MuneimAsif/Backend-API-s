const SendData = (isSuccessfull, message, data) => {
    isSuccessfull, 
    message = isSuccessfull ? message : '', 
    error = !isSuccessfull ? message : '' 
    data 
}
module.exports = {SendData}