let output="";
for (var i=0;i<list.length;i++){
    output = output + "<article><a href='" + list[i][0] + "'" + " class=image><img src='" + list[i][1] + "'" + "></img></a><p><i>" + list[i][2] + "<br><font color='brown'>";
    let hashtag = "";
    for (var j=0;j<list[i][3].length;j++){
        hashtag = hashtag + "#" + list[i][3][j] + "&nbsp;"
    }
    output = output + hashtag;
    output = output + "</font></i></p><h3><a href='" + list[i][0] + "'>" + list[i][4] + "</a></h3></article>";
}
document.getElementById("output").innerHTML = output;

