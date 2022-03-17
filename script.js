
	document.addEventListener('DOMContentLoaded', () => {

		const getSearchBar =
			document.querySelector('#searchBar');
		const getAllBooks =
			document.querySelectorAll('.book-poster');

		getSearchBar.addEventListener('keyup', e => {
			getAllBooks.forEach(book => {
				if (book.innerText.toLowerCase().includes(
					e.target.value.toLowerCase())) {
					book.style.display = 'block';
					return book;
				}
				else {
					book.style.display = 'none';
				}
			});
		});
	});



function validate() {
	var user_name =document.getElementById('user_name').value;
	var email_addr = document.getElementById('email_addr').value;
	var password = document.getElementById('password').value;
	var con_password = document.getElementById('con_password').value;
var status =false;
	if (user_name == "") {
		document.getElementById("namelocation").innerHTML = "Please enter your name";
		status = false;
	} else {
		document.getElementById("namelocation").innerHTML = "";
		status = true;
	}
	if (email_addr == "") {
		document.getElementById("namelocation").innerHTML = "Please enter your Email";
		status = false;
	} else {
		document.getElementById("namelocation").innerHTML = "";
		status = true;
	}
	
	if (password != con_password) {
		document.getElementById('wrong_pass_alert').style.color = 'red';
		document.getElementById('wrong_pass_alert').innerHTML
		= '☒ Use same password';
		document.getElementById('create').disabled = true;
		document.getElementById('create').style.opacity = (0.4);
	} else {
		document.getElementById('wrong_pass_alert').style.color = 'green';
		document.getElementById('wrong_pass_alert').innerHTML =
			'🗹 Password Matched';
		document.getElementById('create').disabled = false;
		document.getElementById('create').style.opacity = (1);
	}
}

function wrong_pass_alert() {
	if (document.getElementById('password').value != "" &&
		document.getElementById('con_password').value != "") {
		alert("Your Data is submitted");
	} else {
		alert("Please fill all the fields");
	}
}





function validate_login(){

	var email = document.myForm.email.value;
	var passwordlenght = document.myForm.password.value.lenght;
	var status = false;
	if (email == "") {
		document.getElementById("email_location").innerHTML = "please enter your name";
		status = false;
	} else {
		document.getElementById("email_location").innerHTML = "";
		status = true;
	}
	if (passwordlenght < 6) {
		document.getElementById("password_location").innerHTML = "please must be greater than 6";
		status = false;
	} else {
		document.getElementById("password_location").innerHTML = "";
	}
	return status;
}



function scrollToTop() {
	window.scrollTo(0, 0);
}
