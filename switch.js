function check(){
 let result=document.getElementById("a").value
 switch(result)
 {
 case'100':
 document.getElementById("result").innerHTML="Name:Asif MAnzoor<br> Roll Number:100<br> Result:Pass";
 break;
 case'101':
 document.getElementById("result").innerHTML="Name:Fatima Farooq Bisati <br> Roll Number:101<br> Result:Pass";
 break;
 
 
 default:
    document.getElementById("result").innerHTML="invalid roll number"
}
} 
