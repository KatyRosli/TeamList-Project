import { useState } from 'react';

export const useLocalStorage = (keyName: string, defaultValue: object | string[] | boolean[] | number[] | null) => {
    const [storedKeyName, setStoredKeyName] = useState<string>(keyName);
    const [storedValue, setStoredValue] = useState(() => {
        setStoredKeyName(keyName);
        try {
            const value = window.localStorage.getItem(keyName);
            if (value) {
                return JSON.parse(value);
            } else {
                window.localStorage.setItem(keyName, JSON.stringify(defaultValue));
                return defaultValue;
            }
        } catch (err) {
            return defaultValue;
        }
        
    });
    const setValue = (newValue: object | string[] | boolean[] | number[] | null) => {
        try {
            window.localStorage.setItem(storedKeyName, JSON.stringify(newValue));
        } catch (err) {}
        setStoredValue(newValue);
    };
    return [storedValue, setValue];
};
