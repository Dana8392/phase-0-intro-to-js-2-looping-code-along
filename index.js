// Code your solutions in this file

/*const gifts = ['teddy bear','drone','doll','Iron man','Barbie','Doll House']
function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bowl !`);
    }
    return gifts;
};
wrapGifts(gifts);*/

const names = ['Guadalupe', 'Ollie', 'Aki'] ;

function writeCards(names, surprise) {

    const thankYouMessages = [];
    for (let i = 0; i < names.length; i++) {
        thankYouMessages.push(`Thank you, ${names[i]}, for the wonderful ${surprise} gift!`);
        
    }     
    return thankYouMessages;
} 

writeCards(names);

let count = 10;

function countDown(count) {

while (count >= 0) {

    console.log(count);
    count -= 1;

}

return count;

}

countDown(count);