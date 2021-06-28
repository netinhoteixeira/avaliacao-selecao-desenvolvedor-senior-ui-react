import {useState} from 'react';

export default function useToken() {
    const getToken = () => {
        let token = sessionStorage.getItem('token');

        if (token === undefined) {
            token = null;
        }

        return token;
    };

    const [token, setToken] = useState(getToken());

    const saveToken = userToken => {
        if ((userToken !== null) && (userToken !== undefined)) {
            sessionStorage.setItem('token', userToken);
        } else {
            userToken = null;
            sessionStorage.removeItem('token');
        }

        setToken(userToken);
    };

    return {
        setToken: saveToken,
        token
    }
}
