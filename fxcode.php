<?php
$con = mysqli_connect('localhost','root','','ocms');
if(isset($_POST['loginUser'])){
    $umame = mysqli_real_escape_string($con,$_POST['usname']);
    $password = mysqli_real_escape_string($con,$_POST['upass']);

$lognQry ="SELECT username,password,role FROM admin WHERE username ='$umame' and password='$password'";
$result = mysqli_query($con,$lognQry);
if(mysqli_num_rows($result)>0){
   $role = mysqli_fetch_assoc($result);
   $loginRole =$role['role'];
   if($loginRole =='admin'){
header('location: admin/home.php');
   }elseif($loginRole=='bursar'){
header('location: bursar/home.php');
   }else{
    header('location: librarian/home.php');
   }
}
else{
    echo 'role not found';
    header('location: index.php');
}
}
?>