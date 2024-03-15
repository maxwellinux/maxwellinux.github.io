function SmashList(list_input,label){
    let list_1 = [];
    let list_2 = [];
    let list_3 = [];
    let list_4 = [];
    for (var i=0;i<list_input.length;i++){
        if(list_input[i][4] == label_list[0]){
            list_1.push(list_input[i]);
        }
        else if(list_input[i][4] == label_list[1]){
            list_2.push(list_input[i]);
        }
        else if(list_input[i][4] == label_list[2]){
            list_3.push(list_input[i]);
        }
        else if(list_input[i][4] == label_list[3]){
            list_4.push(list_input[i]);
        }
    }
    if( label == label_list[0]){
        return list_1;
    }
    else if( label == label_list[1]){
        return list_2;
    }
    else if( label == label_list[2]){
        return list_3;
    }
    else if( label == label_list[3]){
        return list_4;
    }
}

let list_1 = SmashList(list,"1");
let list_2 = SmashList(list,"10");
let list_3 = SmashList(list,"2");
let list_4 = SmashList(list,"20");
