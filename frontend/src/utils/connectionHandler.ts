import { store } from '../store';

interface RetryConfig {
  maxRetries?: number;
  retryDelay?: number;
  onRetry?: (retryCount: number) => void;
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}

interface FetchOptions extends RequestInit {
  retryConfig?: RetryConfig;
}

export class ConnectionError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ConnectionError';
  }
}

export const handleFetch = async (
  url: string,
  options: FetchOptions = {}
): Promise<Response> => {
  const {
    retryConfig = {
      maxRetries: 3,
      retryDelay: 1000,
    },
    ...fetchOptions
  } = options;

  let lastError: Error;
  let retryCount = 0;

  while (retryCount <= (retryConfig.maxRetries || 3)) {
    try {
      const response = await fetch(url, fetchOptions);
      
      if (!response.ok) {
        throw new ConnectionError(`HTTP error! status: ${response.status}`);
      }

      retryConfig.onSuccess?.();
      return response;

    } catch (error) {
      lastError = error as Error;
      retryCount++;

      if (retryCount <= (retryConfig.maxRetries || 3)) {
        retryConfig.onRetry?.(retryCount);
        await new Promise(resolve => 
          setTimeout(resolve, retryConfig.retryDelay || 1000)
        );
      }
    }
  }

  retryConfig.onError?.(lastError);
  throw lastError;
};

export const checkConnection = async (): Promise<boolean> => {
  try {
    await handleFetch('/api/health', {
      method: 'GET',
      retryConfig: {
        maxRetries: 1,
        retryDelay: 500
      }
    });
    return true;
  } catch {
    return false;
  }
};

export const isOnline = (): boolean => {
  return navigator.onLine;
};

export const setupConnectionListeners = (callbacks: {
  onOnline?: () => void;
  onOffline?: () => void;
}) => {
  window.addEventListener('online', () => {
    callbacks.onOnline?.();
  });

  window.addEventListener('offline', () => {
    callbacks.onOffline?.();
  });

  return () => {
    window.removeEventListener('online', callbacks.onOnline || (() => {}));
    window.removeEventListener('offline', callbacks.onOffline || (() => {}));
  };
};