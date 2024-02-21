import { useState, useEffect } from 'react';

const useWebSocket = (url) => {
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        const newSocket = new WebSocket(url);
        setSocket(newSocket);

        return () => newSocket.close();
    }, [url]);

    return socket;
};

export default useWebSocket;
