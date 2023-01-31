function Size_alert(){
				var x = document.forms["myForm"]["size"].value;
				if (x == "17"){
					alert("Supersize is so big that may harm your health");
					return false;
			  }
			}
			
			function calcFunction(){
				var x = document.forms["myForm"]["size"].value;
				var y = document.forms["myForm"]["piece"].value;
				var code = document.forms["myForm"]["code"].value;
				var cost = x * y;
				
				if (code == "mextexgood"){
					cost = (cost*0.865).toFixed(2);;
					document.getElementById("cost").innerHTML="Total cost = €"+ cost;
					alert("Congrats! You've got 13.5% off on this check!");
					}
				else{
					document.getElementById("cost").innerHTML="Total cost = €"+ cost;
				
				return false;
				}
			}	
	
	
	

	

	
	