module.exports = function getZerosCount(number, base) {
  
  var a;
  var pr = [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 
  109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251];
 
  var p=[];
  var index =[];
  var tempnum = [];
  var temp,k = 0;
  var min;
  var num =0;
  
  
		
	
  for (i =0; i< pr.length ; i++){
	  if (base < pr[i]) break;
	  
	  if (base % pr[i] === 0 )   {
		  while (base % pr[i] === 0) {
			 k++;
			 base = base / pr[i];
		  }
		  p.push(pr[i]);
		  index.push(k);
		  k=0;
	  }
  }
  
      
  k=0;
    

	for (i=0; i< p.length; i++){
			for (a=2;a<= number; a++){
				temp = a;
				while (temp % p[i] === 0 ) {
				k++;
				temp = temp / p[i];
				}
			}
							
		tempnum.push(Math.floor(k/index[i]));
		k=0;
	}
				
			
	min = tempnum[0];
	if (tempnum.length > 1){
		for (i=1; i<tempnum.length; i++)	{
			if (tempnum[i]< min) min = tempnum[i];
		}
	} 
	
	num = min;  
  	
	   
	console.log ("zeros="+min);  
		
  
  return num;

  // your implementation
}