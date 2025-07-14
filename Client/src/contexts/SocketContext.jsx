import { useContext, useEffect, useState, createContext } from 'react';
import { io } from 'socket.io-client';

const SocketContext = createContext();

const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);

  const SERVER_URL = 'https://datn-quanlinhathuoc.onrender.com';

  useEffect(() => {
    const socketInstance = io(SERVER_URL, {
      transports: ['websocket'], 
      withCredentials: true      
    });

    setSocket(socketInstance);

    return () => {
      socketInstance.disconnect();
    };
  }, []);

  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  );
};

export const useSocket = () => {
  return useContext(SocketContext);
};

export default SocketProvider;
