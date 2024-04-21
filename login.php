<!DOCTYPE html>
<html lang="en">


<!-- login23:11-->
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0">
    <link rel="shortcut icon" type="image/x-icon" href="assets/img/favicon.ico">
    <title>Login |Clearance Management System</title>
    <link rel="stylesheet" type="text/css" href="indexes/assets/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="indexes/assets/css/font-awesome.min.css">
    <link rel="stylesheet" type="text/css" href="indexes/assets/css/style.css">
</head>

<body>
    <div class="main-wrapper account-wrapper">
        <div class="account-page">
			<div class="account-center">
				<div class="account-box">
                    <form action="fxcode.php" method="POST" class="form-signin">
						<div class="account-logo">
                            <a href="#"><h3>Administration Dashboard</h3></a>
                        </div>
                        <div class="form-group">
                            <label>Username</label>
                            <input type="text" name="usname" placeholder="Enter your user name" autofocus="" class="form-control">
                        </div>
                        <div class="form-group">
                            <label>Password</label>
                            <input type="password" name="upass" class="form-control">
                        </div>
                        <!--<div class="form-group text-right">
                            <a href="forgot-password.html">Forgot your password?</a>
                        </div>-->
                        <div class="form-group text-center">
                            <button type="submit" name="loginUser" class="btn btn-primary account-btn">Login</button>
                        </div>
                    </form>
                </div>
			</div>
        </div>
    </div>
    <script src="assets/js/jquery-3.2.1.min.js"></script>
	<script src="assets/js/popper.min.js"></script>
    <script src="assets/js/bootstrap.min.js"></script>
    <script src="assets/js/app.js"></script>
</body>


<!-- login23:12-->
</html>