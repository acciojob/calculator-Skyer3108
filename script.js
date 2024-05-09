//your code here
const input=document.getElementById('input')
const bottons=document.querySelectorAll('button')


bottons.forEach((button)=>{
	button.addEventListener('click',()=>{

		if(button.id==='clear'){
			input.value=''
		}

		else if(button.id==='ans'){

			
				input.value=eval(input.value)
			
		}
			

		else{
			input.value+=button.textContent
		}

		
		
	})
})