function validateTextbox() {
var name=document.getElementById("name");
var address=document.getElementById("address");
if(name.value.length<5 || address.value.length<5){
  alert("sorry enter at least 5 characters");
  name.focus();
  address.focus();
  name.style.border="solid 3px red";
  return false;
}

}
function check() {

  if(confirm("final and binding!!!")==true){
          parag=document.getElementsByClassName("para");
          name1=parag[0].innerHTML;
          name2=parag[1].innerHTML;
          parag[2].innerHTML=name1+name2;
          parag[0].innerHTML="";
          parag[1].innerHTML="";
          document.getElementById("test").style.visibility="hidden";

}
}
function visit() {
  window.location="jscript.html"

}
