import React, { useEffect, useState } from 'react';
import { Formulario } from './Components/Formulario';

import axios from 'axios';
import { Cancion } from './Components/Cancion';

function App() {

  const [ busquedaLetra, setBusquedaLetra ] = useState({});
  const [ letra, setLetra ] = useState('');

  useEffect( () => {

    if( Object.keys( busquedaLetra ).length === 0 ) return;

    const consultarAPILetra = async () => {
        const { artista, cancion } = busquedaLetra;

        const url =`https://api.lyrics.ovh/v1/${ artista }/${ cancion }`;
        const resultado = await axios.get( url );

        setLetra( resultado.data.lyrics );
    }

    consultarAPILetra();
  }, [busquedaLetra]);

  return (
      <>
        <Formulario 
          setBusquedaLetra={ setBusquedaLetra }
        />

        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6">
              
            </div>
            <div className="col-md-6">
                <Cancion letra={ letra }/>
            </div>
          </div>
        </div>
      </> 
  );
}

export default App;
