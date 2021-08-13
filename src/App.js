import React from 'react';
import './App.css';
import MainLayout from "./components/mainLayout"
import { AuthProvider } from "./contex/AuthContext"







function App() {



  return (
    <div className="container">
      <AuthProvider >
        <MainLayout>
         
        </MainLayout>
      </AuthProvider>
    </div>
  );
}

export default App;
