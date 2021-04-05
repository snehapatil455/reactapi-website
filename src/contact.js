import React , {useEffect}  from 'react';
function Contact()
{
    return(
        <div>
        <h1>Contact Us</h1>
        <button onClick={()=>{console.warn("after click")}}
        >click me</button>
        </div>
    )
}
export default Contact;