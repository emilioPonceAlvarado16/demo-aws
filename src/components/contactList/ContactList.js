import { React, Fragment } from 'react'
import Card from '../card/Card'
import Link from 'next/link';
export default function ContactList(props) {
    const { list } = props;
    return (
        <Fragment>
            <div className="col-xs-12  col-sm-12 col-md-7">
                <div className='panel panel-default bg-dark' style={{ height: "50vh", overflow:"auto" }}>
                    <div className="panel-heading c-list">
                        <span className="title">Contacts</span>
                        <ul className="pull-right c-controls">
                      <Link href="/add-contact"><a>Add contact <i className="fa fa-plus"></i></a></Link> 
                        </ul>
                    </div>
                    {
                        list.length === 0 ? 
                        <span style={{color:"white", fontSize:"1rem"}}>
                           Finding Contacts!
                        </span> :
                            list.map((contacto, index) => {
                                return (

                                    <Card key={index} name={contacto.name} lastname={contacto.apellido} email={contacto.email} />

                                );
                            })}


                </div>
            </div>

        </Fragment>
    )
}
