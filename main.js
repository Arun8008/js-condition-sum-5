let form = document.querySelector('form');
form.addEvent;Listener('submit',function(e){
	e.preventDefault();

   let inp=parseInt(document.querySelector('#number').value);
   let result = document.querySelector('#result');

   if(inp%7==0){
		result.innerHTML="The Number Is Divisible By 7";
		
	}
   else{
      result.innerHTML=`${inp} Is Not Divisible by 7`;
   }
});