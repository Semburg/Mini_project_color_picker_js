function change_bg(){
    let colorEnter = document.getElementById("color_Set").value;
    document.body.style.backgroundColor = colorEnter;

    if(colorEnter=="black" || colorEnter == "#000" || colorEnter == "rgb(0,0,0)"){
        document.getElementById("form1").style.backgroundColor = "#555"
    } else {
        document.getElementById("form1").style.backgroundColor = "#fff"
    }
}