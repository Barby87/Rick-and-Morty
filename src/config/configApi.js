import axios from 'axios';
import store from '../store/store';

export function conectionApi() {
    // Llamado a la api
    axios.get('https://rickandmortyapi.com/api/character/')
    .then(response => {
        console.log('Response Api', response.data.results);
        // Mandando la data obtenida de la api al store
        store.dispatch('apiData', response.data.results);
    })
    .catch(error => console.error(error));
}