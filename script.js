//your code here
const input=document.getElementById('input')
const bottons=document.querySelectorAll('button')


bottons.forEach((button)=>{
	button.addEventListener('click',()=>{

		if(button.id==='clear'){
			input.value=''
		}

		else if(button.id==='ans'){

			try{
				input.value=eval(input.value)
			}
			catch(error){
				
			}
		}

		else{
			input.value+=button.textContent
		}

		
		
	})
})