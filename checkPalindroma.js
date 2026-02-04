// Palindrome kontrolü
function palindromeKontrol() {
      const input = document.getElementById("palindromeInput").value;
      const ters = input.split('').reverse().join('');
       if (input === ters) {
        document.getElementById("palindrome").innerHTML = "Palindrome";
       } 
       else {
        document.getElementById("palindrome").innerHTML = "Palindrome değil";
       }
    }