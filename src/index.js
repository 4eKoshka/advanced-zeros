module.exports = function getZerosCount(number, base) {
  
  var pr = [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 
  109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251];
 
  var p=[];
  var index =[];
  var index1=[];
  var index2=[];
  var temp;
  var k = 0;
  var z = 0;
  		
  for (var i =0; i< pr.length ; i++){
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
     
  for(i=0; i<p.length; i++){
	  temp= number;
	  while (temp>0){
		  temp = Math.floor(temp/p[i]);
		  z=z+temp;
	 	 }
	  index1.push(z);
	  z=0;
  	}

  for(i=0;i<p.length;i++){
	  k=Math.floor(index1[i]/index[i]);
	  index2.push(k);
  	}
  
  var min=index2[p.length-1];
    
  if (p.length>1){
  		for(i=p.length-2; i>=0 ;i--){
	  		if(index2[i]<min)	 min=index2[i];
	  	}
	}

   return min; 
}
