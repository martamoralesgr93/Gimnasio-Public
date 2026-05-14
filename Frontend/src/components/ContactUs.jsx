import { useForm } from "react-hook-form";
import { createContacts } from "../services/contact.service";
import { useEffect, useState } from "react";
import { useCreateContactError } from "../hooks";
import './ContactUs.css'; 

 export const ContactUs = () => {
  const {register,handleSubmit,reset}= useForm();
  const [res, setRes] = useState({});
  const [send, setSend] = useState(false);
  const [ok, setOk] = useState(false);
  const [telephoneError, setTelephoneError] = useState("");
  const formSubmit = async (formData) => {
    const phoneNumber = formData.telephone;
    const formattedPhoneNumber = formatPhoneNumber(phoneNumber);
    let fullPhoneNumber = formattedPhoneNumber;
    if (!fullPhoneNumber.startsWith('+34')) {
      fullPhoneNumber = `+34${formattedPhoneNumber.replace(/\s+/g, '').replace(/-/g, '')}`;
    }
    formData.telephone = fullPhoneNumber;
    console.log("formData", formData);
    setSend(true);
    setRes(await createContacts(formData));
    setSend(false);
  }
  const formatPhoneNumber = (phoneNumber) => {
  const formattedPhoneNumber = phoneNumber.replace(/\s+/g, '').replace(/-/g, '');
  
  if (!formattedPhoneNumber.startsWith('+34')) {
    return `+34${formattedPhoneNumber}`;
  }

  return formattedPhoneNumber;
}

   useEffect(() => {
    // aqui voy a llamar a un customHook para gestionar los errores
    useCreateContactError(res, setRes, setOk,setTelephoneError,reset);
    console.log('res', res);
  }, [res]);
  if(ok){
    console.log("Tu duda ha sido enviada");
  }
  return (
    <>
    <div className="form-wrap">
      <h1 className="text-serif">INQUIRIES</h1>
      <p className="text-muted text-uppercase">Connect with our performance concierge</p>
      <form onSubmit={handleSubmit(formSubmit)}> 

        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" {...register("name", { required: true })}/>
        </div>

        <div className="form-group"> 
          <label htmlFor="email">Corporate Email</label>
          <input type="email" id="email" {...register("email", { required: true })}/>
        </div>
     
        <div className="form-group">
          <label htmlFor="telephone">Telephone</label>
          <input type="text" placeholder="+34 612 345 789" id="telephone" {...register("telephone", { required: true })}/>
          {telephoneError && <span className="error-message">{telephoneError}</span>}
        </div>
     
        <div className="form-group">
          <label htmlFor="content">Your Inquiry</label>
          <textarea id="content" rows="4" {...register("content", { required: true })}/>
        </div>
      
        <button className="btn-primary-luxury" type="submit" disabled={send}>
          SUBMIT REQUEST
        </button>
    </form>
    </div>
    </>
  )
}

