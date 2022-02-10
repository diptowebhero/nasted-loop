// Nested Loop
// 1
// 12
// 123
// 1234
// 12345
var l = 10;
for (var i = 1; i <= l; i++) {
  var m = " ";
  for (var n = 1; n <= i; n++) {
    m += n + " ";
  }
  // console.log(m);
}
// task 2
// *
// **
// ***....
var g = 10;
for (var z = 1; z <= g; z++) {
  var h = "";
  for (var r = 1; r <= z; r++) {
    h += "*" + " ";
  }
//   console.log(h);
}
// task 3
// *****
// *****
// *****
// *****
var g = 10;
for (var z = 1; z <= g; z++) {
  var h = "";
  for (var r = 1; r <= g; r++) {
    h += "*" + " ";
  }
//   console.log(h);
}
