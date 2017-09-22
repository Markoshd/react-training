import axios from 'axios'

const COMPANY_ID = '2';
const EMPLOYEE_ID = '2';
const API = `http://127.0.0.1:8000/api-temp/companies/${COMPANY_ID}/employees/${EMPLOYEE_ID}/punches/manuals`;
export const FETCH_PUNCH = 'FETCH_PUNCH';

export function  punchManual() {

    const request =   axios.post(API,
        {   'input-type': 1,
            'justification': "Esqueceu",
            'input-date': "21/09/2017 ",
            'input-hour': "20:00"
        },
            { headers: { 'Content-Type': 'application/json' } })

        .catch(function (error) {
            if (error.response) {
                // console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.statusText);
            }
        });

    return {
        type: FETCH_PUNCH,
        payload: request
    };
}

// export function  nonattendance() {
//
//
//     const request =   axios.post(API,
//         {   'input-': 2,
//             'justification': "MEDICO",
//             'input-date': "20/09/2017 ",
//             'input-hour': "10:00"},
//         { headers: { 'Content-Type': 'application/json' } })
//
//         .catch(function (error) {
//             if (error.response) {
//                 // console.log(error.response.data);
//                 console.log(error.response.status);
//                 console.log(error.response.statusText);
//             }
//         });
//
//     return {
//         type: FETCH_NONATTENDANCE,
//         payload: request
//     };
// }