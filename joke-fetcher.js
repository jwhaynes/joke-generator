// script to fetch a random joke from the joke api


const newJoke = () => {
    const joke_api_url = 'https://official-joke-api.appspot.com/random_joke';

    fetch(joke_api_url)
    .then(data=>{return data.json()})
    .then(res=>{
        const typeDispaly = document.getElementById('joke-type')
        const setupDisplay = document.getElementById('joke-setup')
        const punchlineDispaly = document.getElementById('joke-punchline')

        typeDispaly.innerHTML = res['type']
        setupDisplay.innerHTML = res['setup']
        punchlineDispaly.innerHTML = res['punchline']
        
        console.log(res)})
    .catch(error=>console.log(error))
};


const button = document.getElementById("new-joke-btn");

button.onclick = newJoke;
