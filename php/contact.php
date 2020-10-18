<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio site</title>
    <link rel="stylesheet" href="../css/all.min.css">
    <link rel="stylesheet" href="../css/contact.css">
</head>
<body>
    <!--Div sa nav barom levo-->
    <div class="divNavPosSkills">
        <nav>
            <ul>
                <li><a href="../index.php">Home</a> </li>
                <li><a href="about.php">About</a> </li>
                <li><a href="projects.php">Projects</a> </li>
                <li><a href="https://gogasite.herokuapp.com">MySite</a> </li>

            </ul>

        </nav>
    </div>
    <div class="formPos">
        
        <form action="./druga.php" method="POST">
            <h1>Contact</h1>
           
            <label for="fame">Name</label>
                <input type="text" name="Name" required><br>
            
            <label for="lastName">Lastname </label>
                <input type="text" name="lastName"required ><br>
           
            <label for="email">Email</label>
                <input type="email" name="email" required ><br>
                <input type="submit" value="submit" id="sub">
               
           
          

           


        </form>



    </div>

    <div class="info">
        <h1>gmail:  <strong>goranivankovic87@gmail.com</strong> </h1>
        <h2>Telephone: <strong> +381/064-415-68-13 </strong></h2>


    </div>




   
    <div class="gogaDesign">
        <h3>gogaDesign</h3>
    </div>


    <button class="menuBar">
        <i class="fa fa-bars menu" ></i>
  
        
      </button>
  
  
  <div class="div30"></div>


    <script src="../js/contact.js"></script>
</body>
</html>