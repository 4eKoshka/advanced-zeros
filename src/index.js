module.exports = function getZerosCount(number, base) {
  
  var a;
  var pr = [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 
  109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251];
 
  var p=[];
  var index =[];
  var temp,k = 0;
  
  
	
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
  
   // console.log('arr='+p);
	//console.log('index='+index);
	
  k=0;
    
 for (a=2;a<= number; a++){
	 if (a % p[p.length-1] === 0) {
			temp = a;
			while (temp % p[p.length-1] === 0 ) {
						k++;
						temp = temp / p[p.length-1];
				}
			
			}
	}
	
var num = Math.floor(k/index[index.length - 1]);
//console.log ("zeros = "+ num);
return num;

  // your implementation
}