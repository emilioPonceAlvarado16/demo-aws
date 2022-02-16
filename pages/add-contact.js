import {useState} from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import Header from '../src/components/header/Header';
import Contactform from '../src/components/contactform/Contactform';
export default function AddContact() {
    const [ loading, setLoading ] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const processData = (data) => {
        const URL = "https://f3s91itbb5.execute-api.us-east-2.amazonaws.com/dev/contacts";
        console.debug(data);
        setLoading(true);

        axios.post(URL, data)
        .then((response) => {
            console.debug(response);
            setLoading(false);
        })
    }

    return (
        <div className="container">
            <Header  />


            <Contactform/>
            
        </div>
    )
}