import React from 'react';
import { Link } from 'react-router-dom';
import { MdClose } from 'react-icons/md';

import './cart.css'; 

const Cart = ({ cart, setCart }) => {
    const incqty=(product)=>
        {
            const exsit=cart.find((x)=>
            {
                return x.id===product.id
            })
            setCart(cart.map((curElm)=>
            {
                return curElm.id===product.id ? {...exsit,qty: exsit.qty + 1}: curElm
            }))
        }
//scadere
    // const decqty=(product)=>
    //     {
    //         const exsit=cart.find((x)=>
    //         {
    //           return x.id===product.id
    //         })
    //         setCart(cart.map((curElm)=>
    //         {
    //         return curElm.id===product.id ? {...exsit,qty: exsit.qty - 1}: curElm
    //         }))
    //       }
    const decqty = (product) => {
        const exsit = cart.find((x) => {
            return x.id === product.id;
        });
    
        if (exsit && exsit.qty > 1) {
            setCart(
                cart.map((curElm) => {
                    return curElm.id === product.id ? { ...exsit, qty: exsit.qty - 1 } : curElm;
                })
            );
        } else {
            alert('Cantitatea minimă pentru acest produs este 1, daca dorești poți să ștergi produsul din coș!');
        }
    };
//stergere produs din cos
          const removeproduct=(product)=>
            {
                const exsit=cart.find((x)=>
                    {
                        return x.id===product.id
                    })
                    if(exsit.qty>0)
                        {
                            setCart(cart.filter((x)=>
                            {
                                return x.id !==product.id
                            }))
                        }
            }

            const Totalprice=cart.reduce((price,item)=>price+item.qty *item.Price, 0)
    return (
        <div className='cartcontainer'>
            {
                cart.length === 0 ?
                <div className='emptycart'>
                    <h2 className='empty'>Cosul este gol!</h2>
                    <Link to='/product' className='emptycartbtn'>Cumpara acum!</Link>
                </div>
                :
                <div className='contant'>
                    {
                        cart.map((curElm) => {
                            return (
                                <div className='cart_item' key={curElm.id}>
                                    <div className='img_box'>
                                        <img src={curElm.Img} alt={curElm.Title} />
                                    </div>
                                    <div className='detail'>
                                        <div className='info'>
                                        <h4>{curElm.Cat}</h4>
                                        <h3>{curElm.Title}</h3>
                                        <p>Pret: RON {curElm.Price}</p>
                                        <div className='qty'>
                                                <button className='incqty' onClick={()=>incqty(curElm)}> +</button>
                                                <input type='text' value={curElm.qty}></input>
                                                <button className='decqty' onClick={()=>decqty(curElm)}>-</button>
                                        </div>
                                        <h4 className='subtotal'>Pret produse: RON{curElm.Price * curElm.qty}</h4>
                                        </div>
                                        <div className='close'>
                                        <button onClick={()=>removeproduct(curElm)}><MdClose /></button>
                                    </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            }
            {
                cart.length >0 &&
                <>
                <button className='checkout'>
                    Plateste
                </button>
                </>
            }
            <h2 className='totalprice'>Total: RON {Totalprice}</h2>
        </div>
    );
}

export default Cart;
