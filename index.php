<html lang="en">
<head>
  <title>TODO LIST</title>
   <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  <link rel="stylesheet" type="text/css" href="/qjquery/main.css">
<script src="/qjquery/hide.js"></script>
</head>
<body>

<div class="container">
<p>
  <div class ="row">
    <div class="col-lg-7" >
  <label for="newtask"> <h3>Add item</h3></label>
  
  title : <input id ="one" type="text"> <br><br>
  details : <input id ="two" type="text">

  <button id ="button">Add </button>
</p>


<h3> Todo</h3>
<ul id="incomplete-task">
  <li><input type="checkbox"><label></label>
    <input type="text">
</ul>
</div>
<div class="col-lg-5">
<button id ="button" onclick="localStorage.clear(); display();">Delete</button>

</div>
</div>
</body>
</html>