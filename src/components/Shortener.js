import React, {useState, useEffect} from 'react'
import bgMobile from "../images/bg-shorten-mobile.svg";
import bgDesktop from "../images/bg-boost-desktop.svg"

const getLocalStorage = () => {
    let links = localStorage.getItem("links");

    if(links){
        return JSON.parse(localStorage.getItem("links"))
    }else{
        return []
    }
}

const Shortener = () => {
    const [text, setText] = useState("");
    const [links, setLinks] = useState(getLocalStorage())
    const [buttonText, setButtonText] = useState("Copy")

    const handleSubmit = (e) =>{
        e.preventDefault();

        if(!text){
            alert("Empty Input 😐")
        }else{
            const shortenLink = async() => {
                const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${text}`)
                const data = await res.json();
                console.log(data.result);
                setLinks(data.result)
                setText("");
            }
            shortenLink();
        }
    }

    const handleCopy = () =>{
        navigator.clipboard.writeText(links.full_short_link)
        setButtonText("Copied 😁")
    }

    useEffect(() => {
      localStorage.setItem("links", JSON.stringify(links));
    }, [links])
    
  return (
        <>
            <section className='max-width shortener relative'>
                <picture>
                    <source media="(min-width: 768px)" srcSet={bgDesktop} />
                    <img src={bgMobile} alt="" />
                </picture>
            </section>
        </>
    )
}

export default Shortener