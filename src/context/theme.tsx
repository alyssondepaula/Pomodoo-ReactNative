import React, {createContext, useState, useEffect, useContext} from 'react';

interface Tema {
  temaNome: string,
  darkMode: boolean,
  toggleTema(): Promise<void>;
}


const TemaContext = createContext<Tema>({} as Tema);

const TemaProvider: React.FC = ({children}) => {
  const [dark, setDark] = useState(false);
  const [temaNome, setTema] = useState('light');

  const toggleTema =  async () => {
    setDark(!dark)
  }
  return (
    <TemaContext.Provider value={{ temaNome: temaNome, darkMode: dark, toggleTema }}>
    {children}
    </TemaContext.Provider>
  );
};

function useTema() {
  const context = useContext(TemaContext);
  if (!context) {
    throw new Error('useAuth must be used within an ThemeProvider.');
  }
  return context;
}

export {TemaProvider, useTema};