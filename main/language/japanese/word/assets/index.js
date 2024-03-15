function ShowIndex(list_input,index){
    if (index == '0'){
        document.getElementById("outlet_table").innerHTML = TabulateList(list_input);
    }
    else{
        let fragment = Math.floor(list_input.length / number) + 1;
        let start = (index-1)*number;
        let end = index*number;
        document.getElementById("outlet_table").innerHTML = TabulateList(list_input.slice(start,end));
    }
}

function IndexButton(label){
    if (label == "0"){
        let fragment = Math.floor(list.length / number) + 1;
        let index_button = "<button id='button' onclick='ShowIndex(list,0)'>ALL</button>&nbsp;";
        for (var i=0;i<fragment;i++){
            index_button = index_button + "<button id='button' onclick='ShowIndex(list," + String(i+1) + ")'>#" + String(i+1) + "</button>&nbsp;";
        };
        document.getElementById("index_button").innerHTML = index_button;
    }
    else if (label == label_list[0]){
        let fragment = Math.floor(list_1.length / number) + 1;
        let index_button = "<button id='button' onclick='ShowIndex(list_1,0)'>ALL</button>&nbsp;";
        for (var i=0;i<fragment;i++){
            index_button = index_button + "<button id='button' onclick='ShowIndex(list_1," + String(i+1) + ")'>#" + String(i+1) + "</button>&nbsp;";
        };
        document.getElementById("index_button").innerHTML = index_button;
    }
    else if (label == label_list[1]){
        let fragment = Math.floor(list_2.length / number) + 1;
        let index_button = "<button id='button' onclick='ShowIndex(list_2,0)'>ALL</button>&nbsp;";
        for (var i=0;i<fragment;i++){
            index_button = index_button + "<button id='button' onclick='ShowIndex(list_2," + String(i+1) + ")'>#" + String(i+1) + "</button>&nbsp;";
        };
        document.getElementById("index_button").innerHTML = index_button;
    }
    else if (label == label_list[2]){
        let fragment = Math.floor(list_3.length / number) + 1;
        let index_button = "<button id='button' onclick='ShowIndex(list_3,0)'>ALL</button>&nbsp;";
        for (var i=0;i<fragment;i++){
            index_button = index_button + "<button id='button' onclick='ShowIndex(list_3," + String(i+1) + ")'>#" + String(i+1) + "</button>&nbsp;";
        };
        document.getElementById("index_button").innerHTML = index_button;
    }
    else if (label == label_list[3]){
        let fragment = Math.floor(list_4.length / number) + 1;
        let index_button = "<button id='button' onclick='ShowIndex(list_4,0)'>ALL</button>&nbsp;";
        for (var i=0;i<fragment;i++){
            index_button = index_button + "<button id='button' onclick='ShowIndex(list_4," + String(i+1) + ")'>#" + String(i+1) + "</button>&nbsp;";
        };
        document.getElementById("index_button").innerHTML = index_button;
    }
    else if (label == label_list[4]){
        let fragment = Math.floor(list_5.length / number) + 1;
        let index_button = "<button id='button' onclick='ShowIndex(list_5,0)'>ALL</button>&nbsp;";
        for (var i=0;i<fragment;i++){
            index_button = index_button + "<button id='button' onclick='ShowIndex(list_5," + String(i+1) + ")'>#" + String(i+1) + "</button>&nbsp;";
        };
        document.getElementById("index_button").innerHTML = index_button;
    }
    else if (label == label_list[5]){
        let fragment = Math.floor(list_6.length / number) + 1;
        let index_button = "<button id='button' onclick='ShowIndex(list_6,0)'>ALL</button>&nbsp;";
        for (var i=0;i<fragment;i++){
            index_button = index_button + "<button id='button' onclick='ShowIndex(list_6," + String(i+1) + ")'>#" + String(i+1) + "</button>&nbsp;";
        };
        document.getElementById("index_button").innerHTML = index_button;
    }
    else if (label == label_list[6]){
        let fragment = Math.floor(list_7.length / number) + 1;
        let index_button = "<button id='button' onclick='ShowIndex(list_7,0)'>ALL</button>&nbsp;";
        for (var i=0;i<fragment;i++){
            index_button = index_button + "<button id='button' onclick='ShowIndex(list_7," + String(i+1) + ")'>#" + String(i+1) + "</button>&nbsp;";
        };
        document.getElementById("index_button").innerHTML = index_button;
    }
    else if (label == label_list[7]){
        let fragment = Math.floor(list_8.length / number) + 1;
        let index_button = "<button id='button' onclick='ShowIndex(list_8,0)'>ALL</button>&nbsp;";
        for (var i=0;i<fragment;i++){
            index_button = index_button + "<button id='button' onclick='ShowIndex(list_8," + String(i+1) + ")'>#" + String(i+1) + "</button>&nbsp;";
        };
        document.getElementById("index_button").innerHTML = index_button;
    }
    else if (label == label_list[8]){
        let fragment = Math.floor(list_9.length / number) + 1;
        let index_button = "<button id='button' onclick='ShowIndex(list_9,0)'>ALL</button>&nbsp;";
        for (var i=0;i<fragment;i++){
            index_button = index_button + "<button id='button' onclick='ShowIndex(list_9," + String(i+1) + ")'>#" + String(i+1) + "</button>&nbsp;";
        };
        document.getElementById("index_button").innerHTML = index_button;
    }
}
