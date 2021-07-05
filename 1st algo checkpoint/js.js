//The length of the sentence (the number of characters).
const string =('hello ');
const character = string [i];
for (let i = 0; i < string.length; i++) {
    
    result= result + i
}
console.log (string [i])

//The number of words in the sentence (assuming that the words are separated by a single space)
// 1 : how many words
const string=('hello everyone to this test.')
const words= string.split(' ')
console.log(words.length);
// 2: how many spaces
let counter = 0
for (let i = 0; i < string.length; i++) {
    if (strchar(i)==' ') {
        counter ++;
    }
    
}
console.log (counter);
//The number of vowels in the sentence.
fonction vowelsCount(string){
    var count =0;
    var vowels ='aeiou'
    for (let i = 0; i < string.length; i++) {
        if (vowels.indexOf(string[i])>-1) {
            count++;
        }
        
    }
}