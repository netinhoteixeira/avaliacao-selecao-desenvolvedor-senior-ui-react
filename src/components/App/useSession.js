import {useState} from 'react';

export default function useSession() {
    const getSession = () => {
        let session = sessionStorage.getItem('session');

        if (session === undefined) {
            session = null;
        } else {
            session = JSON.parse(session);
        }

        return session;
    };

    const [session, setSession] = useState(getSession());

    const saveSession = userSession => {
        if ((userSession !== null) && (userSession !== undefined)) {
            sessionStorage.setItem('session', JSON.stringify(userSession));
        } else {
            userSession = null;
            sessionStorage.removeItem('session');
        }

        setSession(userSession);
    };

    return {
        setSession: saveSession,
        session
    };
}
