<html>
<body>

<h2>JavaScript Arrays</h2>

<p>The Array.find() method returns the value of the first element in an array that passes a test (provided by a function).</p>

<p id="demo"></p>

<script>
const ages = [ 2, 4, 0, -7 ];

document.getElementById("demo").innerHTML = checkAge();

function checkAge() {
var sumZero=0;
for (var i = 0; i < ages.length; i++){
  if (ages[i] > 0) {
   sumZero += ages[i]
  }
  }
  return sumZero;
}
</script>

<p>The Array.find() method is not supported in Internet Explorer.</p>
<!--sum only positive values, return zero if nothing to sum-->
</body>
</html>