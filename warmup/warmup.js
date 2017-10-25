// warm up exercises

//1.  max function which takes an array and returns the maximum number

function my_max(array) {
  var a;
  var i = 0;
  while (i < array.length) {
    if (i === 0) {
      a = array[i];
    } else {
      if (array[i] > a) {
        a = array[i];
      }
    } i++;
  }
  console.log(a);
}
my_max([1,8,3,2,7]);

//2.  vowel_count which takes a string and returns the number of vowels (AEIOUY)

function vowel_count(string) {
  var num_vowels = 0;
  var i = 0;
  while (i < string.length) {
    if (/[aeiouy]/.test(string[i])) {
     num_vowels++;
   } i++;
  }
  console.log(num_vowels);
}

vowel_count("ruby on rails");
//3.  reverse function which takes a string and returns all the characters in opposite position

function my_reverse(string) {
  var reversed = [];
  for (var i = string.length - 1; i >= 0; i--) {
    reversed.push(string[i]);
  }
  console.log(reversed.join(""));
}

my_reverse('hello');
