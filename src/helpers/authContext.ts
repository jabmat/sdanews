import { createContext } from 'react';

// context jest obiektem, który zapewnia nam funkcje ale nie jest to hook
// useCOntext hook - później

export const authContext = createContext(false); // na początek dajemy false lub null (uwaga! null chyba nie działa juz, zmienili interfejs) - gdyż należy podać jakąkolwiek wartość
