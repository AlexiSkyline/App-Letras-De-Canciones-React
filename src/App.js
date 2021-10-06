import React, { useEffect, useState } from 'react';
import { Formulario } from './Components/Formulario';

import axios from 'axios';
import { Cancion } from './Components/Cancion';
import { Info } from './Components/Info';

function App() {

  const [ busquedaLetra, setBusquedaLetra ] = useState({});
  const [ letra, setLetra ] = useState('');
  const [ info, setInfo ] = useState({});

  useEffect( () => {

    if( Object.keys( busquedaLetra ).length === 0 ) return;

    const consultarAPILetra = async () => {
        const { artista, cancion } = busquedaLetra;

        const url =`https://api.lyrics.ovh/v1/${ artista }/${ cancion }`;
        const url2 = `https://theaudiodb.com/api/v1/json/1/search.php?s=${ artista }`;
        
        const [ letra, informacion ] = await Promise.all([
            axios.get( url ),
            axios.get( url2 )
        ]);

        setLetra( letra.data.lyrics );
        setInfo( informacion.data.artists[0] );
    }

    consultarAPILetra();
  }, [busquedaLetra, info]);

  return (
      <>
        <Formulario 
          setBusquedaLetra={ setBusquedaLetra }
        />

        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6">
              <Info 
                info={ info }
              />
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
