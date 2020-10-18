<?php


$sumbit = $_POST['submit'];

if (isset($_POST['submit'])) {
 
   
   



 $dbc= mysqli_connect('127.0.0.1:3307','root','','lamex');



 $sql =mysqli_query($dbc,"INSERT INTO kant(fname,lastName,email)VALUES('".$na = $_POST['fName']."','".$la = $_POST['lName']."','".$em = $_POST['email']."')");


 //See conection is right;
//  if (mysqli_connect_errno($dbc)) {
//     echo 'Failed to conect:';
   
// }else{
//     echo 'Conection succesfoll:';
// }
if ($sql) {
   echo 'Data inserted';



}else{
    echo 'Failed to insert';
}




}





?>