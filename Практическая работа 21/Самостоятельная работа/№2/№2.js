function GetDigit() {
  let digit = document.getElementById("digit").value;
  return digit;
}
function GetSystem() {
  let system = document.getElementById("system").value;
  return system;
}
function PrintAnswer() {
  let digit = ParseInt(GetDigit());
  //let digit = 5;
  let system = ParseInt(GetSystem());
  //let system = 2;
  let result = Translate(digit, system);
  document.getElementById("Answer").content

    = result;
  //console.log(result);
}
function Translate(digit, system) {
  let k;
  let result = "";

  while (digit > 0) {
    k = digit % system;
    digit = Math.floor(digit / system);
    result = System[k] + result;
  }
  return result;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
}

let System = "0123456789abcdef";
//PrintAnswer();
