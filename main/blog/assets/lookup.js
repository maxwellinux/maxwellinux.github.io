function lookUp(){
let keyword = document.getElementById("lookup").value.toLowerCase();
let output = "";
if (keyword != " " && keyword != ""){
    for (var i=0;i<list.length;i++){
        let title = list[i][4].toLowerCase();
        if (title.includes(keyword) == true){
            output = output + "<a href='" + list[i][0] + "'>" + list[i][4] + "&nbsp;<font color='grey'>" + list[i][2] + "</font></a><br>";
        }
    }
    document.getElementById("result").innerHTML = output;
}
else{
    document.getElementById("result").innerHTML = "";
}
}

