import { useEffect, useState } from 'react';
import { checkConnection, setupConnectionListeners } from '../utils/connectionHandler';

const ConnectionStatus = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [isChecking, setIsChecking] = useState(false);
  const [retryCount, setRetryCount] = useState(0);

  const checkConnectionStatus = async () => {
    setIsChecking(true);
    const status = await checkConnection();
    setIsOnline(status);
    setIsChecking(false);
    if (!status) {
      setRetryCount(prev => prev + 1);
      setTimeout(checkConnectionStatus, 5000);
    } else {
      setRetryCount(0);
      window.location.reload();
    }
  };

  useEffect(() => {
    const cleanup = setupConnectionListeners({
      onOnline: () => {
        setIsOnline(true);
        checkConnectionStatus();
      },
      onOffline: () => {
        setIsOnline(false);
        checkConnectionStatus();
      }
    });

    return cleanup;
  }, []);

  if (isOnline && !isChecking && retryCount === 0) return null;

  return (
    <div className={`fixed bottom-4 right-4 p-4 rounded-lg shadow-lg ${isOnline ? 'bg-green-100' : 'bg-red-100'}`}>
      <div className="flex items-center space-x-2">
        <div className={`w-3 h-3 rounded-full ${isOnline ? 'bg-green-500' : 'bg-red-500'} ${isChecking ? 'animate-pulse' : ''}`} />
        <span className={`text-sm font-medium ${isOnline ? 'text-green-700' : 'text-red-700'}`}>
          {isChecking ? 'Verificando conexão...' :
           isOnline ? 'Conexão restaurada' : 'Sem conexão'}
        </span>
        {retryCount > 0 && (
          <span className="text-xs text-gray-500">
            Tentativa {retryCount}
          </span>
        )}
      </div>
    </div>
  );
};

export default ConnectionStatus;