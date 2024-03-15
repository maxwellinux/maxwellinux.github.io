function TabulateList(list_input){
    let head = "<tr><td><font color='olive'>ID</font></td><td><font color='maron'>辞書</font></td><td><font color='brown'>日常</font></td><td><font color='maroon'>発音</font></td><td><font color='olive'>分類</font></td></tr>"
    let output = head;
    for (var i=0;i<list_input.length;i++){
        if (list_input[i][2].length > 3 && list_input[i][4] == "10"){
            link = "<a href='https://www.weblio.jp/content/" + list_input[i][2].slice(0,-2) + "'>" + list_input[i][2] + "</a>"
        }
        else{
            link = "<a href='https://www.weblio.jp/content/"+ list_input[i][2] + "'>" + list_input[i][2] + "</a>"
        }
        output = output + "<tr><td>" + list_input[i][0] + "</td><td>" + list_input[i][1] + "</td><td><b>" + link + "</b></td><td><font color='white'>" + list_input[i][3] + "</font></td><td>" + list_input[i][4] + "</td></tr>";
        };
    return output;
}
