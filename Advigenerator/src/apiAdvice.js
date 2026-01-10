export async function getAdvice() {
    try {
        const response = await fetch(`https://api.adviceslip.com/advice?${Math.random()}`);
        const data = await response.json();
       
        const newAdvice = data.slip.advice;
    
        return newAdvice;

   }
   catch{
    console.error('error al conectar la api')
   }
}