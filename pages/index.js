import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Header from '../src/components/header'
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Home() {

  const [registros, setRegistros] = useState([]);
  const [reload, setReload] = useState(0);
  useEffect(() => {
    console.debug('Obteniendo datos de usuarios');

    axios.get('https://9q8rgh6rnf.execute-api.us-east-1.amazonaws.com/prod/contacts')
    .then((response) => {
      if (response.status === 200) {
        setRegistros(response.data);
      }
    });
  }, [reload]);

  let component;

  if (registros.length === 0) {
    component = <div>
      No existen registros disponibles.
    </div>;
  } else {
    component = registros.map((contacto, index) => {
      return (
        <div key={`contacto-${index}`}>
          <div className="column is-quarter">{contacto.nombre}</div>
          <div className="column is-quarter">{contacto.apellido}</div>
          <div className="column is-half">{contacto.email}</div>
        </div>
      );
    })
  }

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Agenda" subtitle="Presiona el botón para agregar un nuevo contacto." />

        <form>
          <div className="columns is-multiline">
            {component}
          </div>

          <div>
            <Link href="/add-contact">
              <a className="button is-large is-link">Agregar +</a>
            </Link>

            <button type="submit" className="button is-large is-danger" onClick={(event) => {
              event.preventDefault();
              setReload(reload + 1);
            }}>
              Reload *
            </button>
          </div>
        </form>
        
      </main>
    </div>
  )
}