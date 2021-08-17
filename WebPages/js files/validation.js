
/*function validateForm() {
    var Name = document.forms["myForm"]["name"]

}*/
function detail() {
    var Name = document.getElementById("name").value;
    var Steps = document.getElementById("steps").value;
    var Contact = document.getElementById("contact").value;
    var Email = document.getElementById("email").value;
    var Pwd = document.getElementById("pwd").value;
    var Type = document.getElementById("type").value;
    var Date = document.getElementById("date").value;
    var Duration = document.getElementById('dur').value;
    var Start = document.getElementById('start').value;
    var End = document.getElementById("end").value;
    var Cal = document.getElementById("calories").value;
    if (Name == "" || Contact == "" || Email == "" || Pwd == "")
        alert("Please fill the Name, Contact, E-mail, Password boxes")
    else
    {
        validateContact(Contact);
        validateEmail(Email);
        validatePwd(Pwd);
        validateWorkout(Date, Type, Duration, Cal, Start, End);
    }
   
    if (Name && Contact && Email)
        alert(Name + "\n" + Contact + "\n" + Email);
    if (Date && Type && Start && End && Duration && Steps && Cal)
        alert(Date + "\n" + Type + "\n" + Start + "\n" + End + "\n" + Duration + "\n" + Steps + "\n" + Cal )
}

function validateWorkout(Date, Type, Duration, Cal, Start, End) {
    if (Date == "" || Type == "" || Duration == "" || Cal == "" || Start == "" || End == "") {
        alert("Please do minimum workout for the day!\n If done Please fill all the required details of the workout.");
    }
}

function validatePwd(Pwd) {
    var passw = /^[A-Za-z0-9]\w{8,15}$/;
    if (!(Pwd.match(passw))) {
        alert("Password should b atleast 8 characters and atmost 15 characters\nIt should have atleast one capital letter and one small letter\nIt should have atleast one special character and one digit");
    }
}

function validateEmail(Email) {
    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(Email))) {
        alert("You have entered an invalid email address!");
    }
}

function validateContact(Contact) {
    var phoneno = /^\d{10}$/;
    if (!(Contact.match(phoneno) && Contact.charAt(0) != 0)) {
        alert("Enter valid phone number");
    }
}