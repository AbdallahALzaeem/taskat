 function factorial(n) {
  if (n <= 1n) {
    return 1n;
  }
  return n * factorial(n - 1n);
}

let number = prompt("اكتب رقم:");
alert(number + "! = " + factorial(BigInt(number)));