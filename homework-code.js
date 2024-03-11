//takes in an array of numbers. The function should return 
//True if any two numbers in list sum to 0, and false otherwise.

function addToZero(nums){
    if (nums.length < 2){
        return false;
    } else {
        for (let i = 0; i < nums.length; i++){
            for (let j = i+1; j < nums.length; j++){
                let total = nums[i] + nums[j];
                if (total === 0){
                    return true;
                }
            }
        }
        return false;
    }
}

console.log(addToZero([]));
 // -> false

console.log(addToZero([1]));      
 // -> false

console.log(addToZero([1, 2, 3]));     
 // -> false

console.log(addToZero([1, 2, 3, -2]));
 // -> true




 //Write a function that takes in a single word, as a string. It should return True if 
 //that word contains only unique characters. Return False otherwise.
 function hasUniqueChars(word) {
    if (word.length === 0 || word.length === 1) {
        return true;
    } else {
        let charMap = {};
        for (let i = 0; i < word.length; i++) {
            let x = word[i];

            if (charMap[x]) {
                return false;
            } else {
                charMap[x] = true;
            }
        }
        return true;
    }
}

console.log(hasUniqueChars("Monday"));
//true
console.log(hasUniqueChars("Moonday"));
// -> False


//A pangram is a sentence that contains all the letters of the English alphabet at least once.
//Write a function to see if a sentence is a pangram.

function isPangram(sentence){
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    sentence = sentence.toLowerCase();

    for (let i = 0; i<alphabet.length; i++){
        let current = alphabet[i];

        if (!sentence.includes(current)){
            return false;
        }
    } return true;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog!"));
// -> True

console.log(isPangram("I like cats, but not mice"));
// -> False



//Write a function, find_longest_word, that takes a list of words 
//and returns the length of the longest one.

function find_longest_word(words){
    let longest = 0;

    for (i = 0; i<words.length; i++){
        let x = words[i].length;

        if (x > longest) {
            longest = x;
        }
    }
    return longest;
}

console.log(find_longest_word(["hi", "hello"])); 
// -> 5