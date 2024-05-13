import React, { useState } from 'react';
import './contact.css';
import { useAuth0 } from "@auth0/auth0-react";


const Contact = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    const [users, setUser] = useState({
        Name: '',
        Email: '',
        Subject: '',
        Message: ''
    });

    const data = (e) => {
        const { name, value } = e.target;
        setUser({ ...users, [name]: value });
    };

    const senddata = async (e) => {
        e.preventDefault();
        const { Name, Email, Subject, Message } = users;
    
        if (!Name || !Email || !Subject || !Message) {
            alert("Toate câmpurile sunt obligatorii și trebuie completate!");
            return;
        }
    
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(Email)) {
            alert("Adresa de email nu este validă sau este greșit scrisă!");
            return;
        }
    
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Name,
                Email,
                Subject,
                Message
            })
        };
    
        try {
            const res = await fetch('https://sitepuig-contact-default-rtdb.firebaseio.com/Message.json', options);
            if (res.ok) {
                alert("Mesajul a fost trimis");
            } else {
                alert("A apărut o eroare la trimiterea mesajului");
            }
        } catch (error) {
            console.error("A apărut o eroare la trimiterea mesajului:", error);
            alert("A apărut o eroare la trimiterea mesajului");
        }
    };

    return (
        <div className='contact_container'>
            <div className='contant'>
                <h2>#Contacteaza-ne</h2>
                <div className='form'>
                    <form method='POST'>
                        <input type='text' name='Name' value={users.Name} placeholder='Introduceți numele...' required autoComplete='off' onChange={data}/>
                        <input type='email' name='Email' value={users.Email} placeholder='Introduceți E-mail...' required autoComplete='off' onChange={data}/>
                        <input type='text' name='Subject' value={users.Subject} placeholder='Introduceți subiectul/problema..' required autoComplete='off' onChange={data}/>
                        <textarea name='Message' value={users.Message} placeholder='Mesajul tau' required autoComplete='off' onChange={data}></textarea>
                        {
                            isAuthenticated ? 
                            <button type='submit' onClick={senddata}>Trimite</button>
                            : <button type='submit' onClick={() => loginWithRedirect()}>Trebuie sa fiti Logat</button>

                        }
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
