function mySandwich(param1, param2,comida, callback) {
    console.log('Started eating my '+comida+'.\n\nIt has: ' + param1 + ', ' + param2);
    callback(comida);
}
function endMessage(comida){
    console.log('Finished eating my '+ comida + '.');
}
mySandwich('ham', 'cheese','sandwich', endMessage);
