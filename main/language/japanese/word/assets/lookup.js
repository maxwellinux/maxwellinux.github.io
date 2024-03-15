function LookUp(list_input){
    let keyword = document.getElementById("lookup").value.toLowerCase();
    if (keyword != " " && keyword != ""){
        let list_lookup = [];
        for (var i=0;i<list_input.length;i++){
            if (String(list_input[i][0]) == keyword || list_input[i][1].includes(keyword) == true || list_input[i][2].includes(keyword) == true || list_input[i][3].includes(keyword) == true ){
                list_lookup.push(list_input[i]);
            }
        };
        document.getElementById("result").innerHTML = TabulateList(list_lookup);
        document.getElementById("result_ring").innerHTML = ">> Output :";
    }
    else{
        document.getElementById("result").innerHTML = "";
        document.getElementById("result_ring").innerHTML = ">> Waiting...";
    }
}
function Clear(){
    document.getElementById("lookup").value="";
    document.getElementById("result").innerHTML = "";
    document.getElementById("result_ring").innerHTML = ">> Waiting...";
}
