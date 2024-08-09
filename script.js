function checkVowels(){

    var text = document.getElementById("inputText").value;
    var vowelCount = 0;

      // To convert to lowerCase. (All vowel Char in the isVowel Char are lowerCase)
    text = text.toLowerCase();

    // Creating a for loop
   for(var i=0; i < text.length; i++){

   var char = text.charAt(i); // i = 0
   if(isVowel(char)){
       vowelCount++;
   }
}
   
var result = document.getElementById("result");
result.textContent = "Total Vowels: " + vowelCount;

}

// Function for Vowel Characters
function  isVowel(char){
    var vowels = ["a","e","i","o","u"];
    return vowels.includes(char);
}