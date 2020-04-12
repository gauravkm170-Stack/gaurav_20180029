<!DOCTYPE html>
<html>
<head>
<title>FWT ASSIGNMENT</title></head>
<body style="background-color:SpringGreen;">
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
* {
  box-sizing: border-box;
}

/* Create two equal columns that floats next to each other */
.column {
  align-content: center;
  border:1px solid black;
  float: left;
  width: 50%;
  padding: 20px;
  height: 300px; /* Should be removed. Only for demonstration */
}

/* Clear floats after the columns */
.row:after {
  padding: 10px;
  content: "";
  display: table;
  clear: both;
}
.contact_me{
position: absolute;
align-content: center;
background-color: #f1f1f1;
width: 380px;
padding: 10px;
color: black;
border: #0000cc 2px dashed;
display: none;
}
</style>
<h1 style="font-size:60px;text-align:center;">My Picture Gallery</h1>

<div class="row">
    <div class="column">
    <h2>Movies</h2>
    <script src="Movies.js"></script>
    <img class="my_img" src="http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg"> <br> 
    <button id="jsstyle" onclick="movies();">Random_gen</button>
    </div> 
    <div class="column">
        <h2>Favorite Personalities</h2>
        <script src="Favourite_personalities.js"></script>
        <img class="my_img2" src="http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg"><br> 
        <button id="jsstyle" onclick="favourite_personalities();">Random_gen</button>
        
    </div>
</div>
<div class="row">
    <div class="column">
    <h2>Zodiac sign</h2>
    <form name="zodiacForm">Enter the Month : <input type="text" name="month" size="10"><br/>
    Enter the Day: <input type="text" name="day" size="10"><br/>
    <input type="button" value="Know your Zodiac" onclick="getZodiacSign()"><br/>
    Your Zodiac sign: <input type="text" name="zodiac" size="25"><br/>
    <input type="reset" value="Reset" />
    </form>
    <script src="Zodiac.js"></script>
</div> 
    <div class="column">
    <h2>BMI Index</h2>
    <form name="bmiForm">
    Your Weight(kg): <input type="text" name="weight" size="10"><br />
    Your Height(cm): <input type="text" name="height" size="10"><br />
    <input type="button" value="Calculate BMI" onClick="calculateBmi()"><br />
    Your BMI: <input type="text" name="bmi" size="10"><br />
    This Means: <input type="text" name="meaning" size="25"><br />
    <input type="reset" value="Reset" />
    </form>
    <script src="BMI_index.js"></script>
</div>
</div>
<script>
function contactFunction() {
    var y = document.getElementsByClassName('contact_me');
    y[0].style.display = 'block';
}
</script>
<div class="contact_me"><p>
Name-Gaurav Kumar<br>
Reg.no-201800295<br>
Email-gaurav_201800295@smit.smu.edu.in<br>
</p></div>
<button type="button" onclick="contactFunction()">Contact Me!</button>

</body>

</html>

