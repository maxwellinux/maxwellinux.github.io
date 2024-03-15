function TabulateList(list_input){
    let head = "<tr><td><font color='olive'>ID</font></td><td><font color='maron'>Keyword</font></td><td><font color='brown'>Collocation</font></td><td><font color='maroon'>e.g.</font></td><td><font color='olive'>Class</font></td></tr>"
    let output = head;
    for (var i=0;i<list_input.length;i++){
        if (list_input[i][4] == "2"){
            link = "<a href='https://www.merriam-webster.com/dictionary/"+ list_input[i][1] + "'>" + list_input[i][1] + "</a>"
        }
        else{
            link = "<a href='https://www.merriam-webster.com/dictionary/"+ list_input[i][1] + "'>" + list_input[i][1] + "</a>"
        }
        output = output + "<tr><td>" + list_input[i][0] + "</td><td><b>" + link + "</b></td><td>" + list_input[i][2] + "</b></td><td><font color='white'>" + list_input[i][3] + "</font></td><td>" + list_input[i][4] + "</td></tr>";
        };
    return output;
}
