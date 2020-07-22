let famousWords = "seven years ago...";

// method 1
famousWords = 'Four score and ' + famousWords;

// method 2
let moreFamousWords = "Four score and ";
famousWords = moreFamousWords + famousWords;

// method 3
let moreFamousWords = "Four score and ";
famousWords = moreFamousWords.concat(famousWords);
