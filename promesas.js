// Métodos estáticos de las Promesas en JS
//Promise.reject('bad request')
Promise.resolve(6)
    .then(rta => console.log('ok', rta ))    
    .catch(error => console.log('error', error ))