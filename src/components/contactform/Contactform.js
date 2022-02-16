import Link from 'next/link';
import React from 'react';
import { set, useForm } from 'react-hook-form';
import { useState } from 'react';
import axios from 'axios';
import Thanks from '../thanks/Thanks';
//https://sheetdb.io/api/v1/74826f4n6xvly
export default function Contactform() {
    const { register, handleSubmit, reset } = useForm();
    const [loading, setLoading] = useState(false);
    const [IsSent, setIsSent] = useState(false);

    const titleStyle = {
        display: "block",
        fontFamily: "verdana",
        fontSize: "39px",
        color: "#333333",
        lineHeight: "1.2",
        textAlign: "center",
        paddingBottom: "30px",
        fontWeight: "bold"
    }
    const processData = (data,e) => {
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
        <>

            <section className='col-12 justify-content-center' style={{height:"100vh", }} >
              
                <div className='container  d-flex justify-content-center' >


                <Link href="/"><a><i className='fa fa-backward'></i> Contacts</a></Link>
                {!IsSent?(    <div className='bg-light col-12 col-md-10 col-lg-6' style={{ border: '0.5px solid #333', borderRadius: "4px", marginTop: "4%", marginBottom: "5%" }}>

                        <form style={{ margin: "4%" }} onSubmit={handleSubmit(processData)}>
                            <div className='container container d-flex justify-content-center' >
                                <span style={titleStyle}>Add Contact</span>
                            </div>
                            <div className="form-group">
                                <label >Name*</label>
                                <input type="text" autoComplete="off" required className="form-control" id="exampleInputEmail1" {...register("nombre")} placeholder="Enter name">
                                </input>
                            </div>

                            <div className="form-group">
                                <label >Lastname*</label>
                                <input type="text" autoComplete="off" required className="form-control" id="exampleInputEmail1" {...register("apellido")} placeholder="Enter Lastname">
                                </input>
                            </div>
                            <div className="form-group">
                                <label >Email address*</label>
                                <input type="email"  {...register("email")} required className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                                </input>
                                <small id="emailHelp" className="form-text text-muted">We&apos;ll never share your email with anyone else.</small>
                            </div>
                           
                          
                         
                            {!loading ? <button type="submit" className="btn btn-info">Submit</button> : (
                                <button type="submit" className="btn btn-info" disabled>Submit


                                </button>
                            )}
                        </form>
                    

                    </div>

                    )
                        :<Thanks/>}
                      
                </div>

                
               

            </section>

        </>
    )
}
