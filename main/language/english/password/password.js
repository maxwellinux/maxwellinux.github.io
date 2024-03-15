function Check() {
    var password=document.getElementById("password").value;
    if (password == "913") {
           location.href="../index.html";
            return true;
    }
    else {
        alert("Password Failed!");
        return false;
    }
}
