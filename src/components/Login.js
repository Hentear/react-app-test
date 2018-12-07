import React from 'react'

const Login = () => {
	return (
		<div className="container">
		<h2>Login Form</h2>

		<form action="/action_page.php">
		  <div class="imgcontainer">
		    <img src="http://chittagongit.com//images/default-profile-icon/default-profile-icon-4.jpg" alt="Avatar" class="avatar">
		  </img>
		  </div>

		  <div class="container">
		    <center>
		    <label for="uname"><b>Username</b></label>
		    <input type="text" placeholder="Enter Username" name="uname" required>
		    </input>
		    <label for="psw"><b>Password</b></label>
		    <input type="password" placeholder="Enter Password" name="psw" required>
		    </input>
		    <button type="submit">Login</button>
		    <label>
		      <input type="checkbox" checked="checked" name="remember"> Remember me
		      </input>
		    </label>
		    </center>

		  </div>

		  <div class="container" style="background-color:#f1f1f1">
		    <button type="button" class="cancelbtn"><a href="index.html">Cancel</a></button>
		  </div>
		</form>
		</div>
	)
}

export default Login