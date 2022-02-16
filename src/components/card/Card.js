import { React, Fragment } from 'react'

export default function Card(props) {
    const { name, lastname, email, prop_key } = props;
    return (
        <Fragment>
            <div key={prop_key}className="col-12  bg-dark pb-5" style={{ color: "white" }} >
                <span className="name">{name} {lastname}</span><br />
                <span className="fa fa-comments text-muted c-info" data-toggle="tooltip" title="scott.stevens@example.com"></span>
                <span className="text-muted">{email}</span><br />
            </div>


        </Fragment>
    )
}
