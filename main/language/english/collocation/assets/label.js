function ShowLabel(list_input,label){
    IndexButton(label);
    document.getElementById("outlet_table").innerHTML = TabulateList(list_input.slice(0,number));
}

