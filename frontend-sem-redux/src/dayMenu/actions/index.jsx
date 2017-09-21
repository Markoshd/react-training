import axios from 'axios'

const COMPANY_ID = '2';
const EMPLOYEE_ID = '2';
const URL_APPONTEME = `http://127.0.0.1:8000/dashboard/companies/${COMPANY_ID}/employees/${EMPLOYEE_ID}/punch-manual`;


const data = {
    'employeeId': 2,
    'company': 2,
    'from': "{{ from|date('Y-m-d') }}",
    'to': "{{ to|date('Y-m-d') }}",
};


export function  url() {

    const request = axios.post(URL_APPONTEME, { data })

    return url;
}