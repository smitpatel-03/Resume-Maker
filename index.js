function addnewWEField(){
 
    let newNode =  document.createElement('textarea');
    newNode.classList.add('form-control')
    newNode.classList.add('weField')
    newNode.classList.add("mt-2")
    newNode.setAttribute("rows",3)
    newNode.setAttribute("placeholder","Enter Here")

    let weOb = document.getElementById('we')
    let weAddButtonOb = document.getElementById("weAddButon")

    weOb.insertBefore(newNode, weAddButtonOb);
}
function addnewAQField(){
    let newNode2 = document.createElement('textarea')
    newNode2.classList.add("form-control")
    newNode2.classList.add("aqField")
    newNode2.classList.add("mt-2")
    newNode2.setAttribute("rows",3)
    newNode2.setAttribute("placeholder","Enter Here")

    let aqOB = document.getElementById("aq")
    let aqAddButoonOb = document.getElementById("aqAddButon")

    aqOB.insertBefore(newNode2, aqAddButoonOb);
}

//generate CV
function generateCV(){ 
    document.getElementById("nameT1").innerHTML= document.getElementById("nameField").value;
    document.getElementById("nameT2").innerHTML= document.getElementById("nameField").value;
    document.getElementById("contactT").innerHTML = document.getElementById("contactField").value;
    document.getElementById("addressT").innerHTML = document.getElementById("addressField").value;
    document.getElementById("fbT").innerHTML = document.getElementById("facebookField").value;
    document.getElementById("inT").innerHTML = document.getElementById("intaField").value;
    document.getElementById("lnT").innerHTML = document.getElementById("linkedField").value;
    document.getElementById("objectiveT").innerHTML = document.getElementById("ObjectiveField").value;

    let wes = document.getElementsByClassName("weField");
    let str ='';

    for(e of wes){
        str = str + `<li> ${e.value} </li>`;
    }

    document.getElementById("weT").innerHTML = str;

    let aqs = document.getElementsByClassName("aqField");
    let str2 ='';

    for(e of aqs){
        str2 = str2 + `<li> ${e.value} </li>`;
    }

    document.getElementById("aqT").innerHTML = str2;

    document.getElementById("cv-form").style.display="none";
    document.getElementById("cv-template").style.display="block";
    document.getElementById("dow").style.display="block";
    document.getElementById('cv-form').style.backgroundImage="";
}

