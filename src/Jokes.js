import { useEffect, useState } from "react";

function Jokes ()
{
    const [setup, setSetup] = useState('');
    const [delivery, setDelivery] = useState('');
    const url = 'https://v2.jokeapi.dev/joke/Any';

    const getSetup = async() => 
    {
        const response = await fetch(url);
        const data = await response.json()
        
        const {category,delivery,setup} = data;

        
        setSetup(setup)
        setDelivery('')

        setTimeout(()=> {
            setDelivery(delivery)
        },2000)

        
    }

    useEffect(()=> {
        getSetup()
    },[]);
    

    return ( <>

    <h1>Some Joke</h1>
    <button onClick={getSetup}>new joke</button>
     <p>{setup}</p>
     <p>{delivery}</p>
    </>
    )
}

export default Jokes;