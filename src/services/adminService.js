import axios from 'axios';
import authHeader from './auth-header';
import * as http from "http";


const API_URL = 'http://localhost:5432/api/test/';

class adminService {


// return filiere classé par note du dossier desc et asc
    getfiliereDesc(){
        return axios.get(API_URL+'filiereDesc')

    }
    getfiliereAsc(){
        return axios.get(API_URL+'filiereAsc')
    }

// return Univ classé par note du dossier desc et asc
    getUnivDesc(){
        return axios.get(API_URL+'UniversiteDesc')
    }
    getUnivAsc(){
        return axios.get(API_URL+'UniversiteAsc')
    }

// return etab classé par note du dossier desc et asc
    getEtabDesc(){
        return axios.get(API_URL+'EtabDesc')
    }
    getEtabAsc(){
        return axios.get(API_URL+'EtabAsc')
    }

}

export default new adminService();