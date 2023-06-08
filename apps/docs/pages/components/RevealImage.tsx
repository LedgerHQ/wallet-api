import React, {useState} from 'react'


const RevealImage = ({link}: {link: string}) => {
    const [isDisplayed, setIsDisplayed] = useState(false);
    return isDisplayed ? (
        <>
          <button onClick={() => {setIsDisplayed(false)}}>Hide</button>
          <img src={link}></img>
        </>
    ) : (
        <>
          <button onClick={() => {setIsDisplayed(true)}}>Show</button>
        </>
    )
};

export default RevealImage