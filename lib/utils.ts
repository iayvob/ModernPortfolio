'use client'
import { useEffect } from 'react';


export const validateString = (value: unknown, maxLength : number) => {
    if (!value || typeof value !== "string" || value.length > maxLength) {
        return false;
    }

    return true;
};

export const getErrorMessage = (error: unknown) => {
    let message: string

    if (error instanceof Error ) {
        message = String(error.message); 
      } else if (error && typeof error === 'object' && 'message' in error) {
          message = String(error.message);
      } else if (typeof error === "string") {
        message = error;
      } else {
        message = "Something went wrong";
      }

    return message;
};

const useScript = (url: string, config?: Record<string, string>) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = url;
    script.async = true;

    if (config) {
      Object.keys(config).forEach(key => {
        script.setAttribute(key, config[key]);
      });
    }

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [url, config]);
};

export default useScript;