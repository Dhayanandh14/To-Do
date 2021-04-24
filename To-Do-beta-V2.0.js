window.onload = function () {

 var x = document.querySelector("#btn");
 x.addEventListener("click", pass);
 
 
	function pass(){

		var v = document.getElementById('input-text').value;
		if (v!=='') {
			var elem = document.createElement('li');
			elem.classList.add("number-of-list")
			var innertext = document.createTextNode(v);
	        elem.appendChild(innertext);
	    	var L =document.getElementById("lists");
	    	L.appendChild(elem);
	    	v = document.getElementById('input-text').value="";
	    	var can = document.createElement("span");
   		 	var canbt = document.createTextNode("\u00D7");
   			can.appendChild(canbt); 
   			elem.appendChild(can);
   			can.addEventListener("click",dell);
   			var check=document.createElement("INPUT");
   			check.setAttribute("type", "checkbox");
   			check.classList.add("tickbox");
   		    elem.append(check);
   		   /* var checklick= document.querySelector(".tickbox");
            checklick.addEventListener("click", strike); */    
        
         }

   		 else {
   		 	alert("Please Enter Any Text");
   		 }

   		/*function strike() {
   		   	lee = document.querySelector("number-of-list")
   		   	lee.style.textDecoration = "underline overline";
   		 }*/

   		 function dell() {
   		 	elem.remove();
   		  }
   		  $(document).ready(function(){

               $("input:checkbox").click(function () {
                   var $this = $(this);
                   if (this.checked) {
                   $this.parent().addClass('completed');
            } else {
                $this.parent().removeClass('completed');
            }
        });



	});
	





   	}








}
