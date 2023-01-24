import React, { useEffect, useRef } from 'react';

// hook | useRef
// - allows creating references to dom elements or js objects. ref is used to acces & direct manipulation of objects or dom elements w/o re-rendering the component.
// - hook returns an object with the 'current' property. this property is used to store any value (dom element or js object) for later access. The value stored does not change during re-renders. Useful for storing stateful value that are not re-created-on each render.
// - can create a ref by calling useRef(), pass an initial parameter value (null or any value). use ref by passing it as the value of the 'ref' prop on a jsx element

function Footer(){
    // creates ref for the date element
    const dateRef = useRef(null);

    useEffect(() => {
        // calls function when the component initially renders
        updateYear();
    }, []);

    function updateYear() {
        const date = new Date().getFullYear();
        // updates the text of the date element using ref
        dateRef.current.textContent = date;
        console.log(`
      \u00A9 ${date} Edwin M. Escobar
      https://github.com/escowin/escowinart
      `);
    }
    
    return(
        <footer id="footer" className="dark">
        <h2>
          <a href="https://github.com/escowin/escowinart/" target="_blank" rel='noreferrer'>
            &copy;<span ref={dateRef}></span> Escowin art
          </a>
          &emsp;
          Austin, TX
        </h2>
      </footer>
    )
}

export default Footer;