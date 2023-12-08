import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';


function loadScript() {
  return new Promise(function (resolve, reject) {
    const script = document.createElement('script')
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = function () {
      resolve();
    };
    script.onerror = () => {
      reject()
    }
    document.body.appendChild(script);
  })

}

async function displayRazorpay() {
  // to load the script
  try {
    await loadScript();
    const resp = await fetch("http://localhost:3000/checkout", { method: "POST" })
    const respJson = await resp.json();
    const { id, currency, amount } = respJson.message;
    console.log(id, currency, amount);


    const options = {
      key: 'rzp_test_HRgCKctoleeAvo',
      currency,
      amount: amount.toString(),
      // id over here should be same 
      order_id: id,
      name: 'Payment',
      description: 'Thanks for the payment',
      handler: function (response) {
        alert("payment id" + response.razorpay_payment_id)
        alert("order id " + response.razorpay_order_id)
        alert(response.razorpay_signature)
      },
      prefill: {
        name: "Jasbir",
        email: "abc@gmail.com",
        phone_number: '9899999999'
      }
    }
    var rzp1 = new Razorpay(options);
    rzp1.open();
  } catch (err) {

    alert(err.message)
  }


}

function App() {
  return (
    <>
      <div>
        <img src={viteLogo} className="logo" alt="Vite logo" />
        <img src={reactLogo} className="logo react" alt="React logo" />

      </div>
      <h1>Payment Demo</h1>
      <div className="card">
        <a onClick={displayRazorpay}
          target="_blank"
          rel="noopener noreferrer"
        >Pay for 500 rs</a>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
