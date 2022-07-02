const jokes = document.querySelector('#joke');
const jokeBtn = document.querySelector('#jokeBtn');

const generateQoutes = async () => {

    try{
        const setHeader = {
            headers: {
                Accept: "application/json"
            }
        }
        const res = await fetch('https://quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com/quote', setHeader);
        const data = await res.json();
        jokes.innerHTML = data.joke;
}catch(err){
    console.log(`the error is ${err}`);
  }
}


jokeBtn.addEventListener('click', generateQoutes);
generateQoutes();
