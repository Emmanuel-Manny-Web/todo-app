import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import UserProvider from './components/UserProvider.tsx'
import { KindeProvider } from '@kinde-oss/kinde-auth-react'

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <KindeProvider
      clientId="8efc2e0acefd4a848cb34c75420c6a18"
      domain="https://todoreactapp.kinde.com"
      redirectUri={
        process.env.NODE_ENV === "production"
          ? "https://todo-app-black-omega.vercel.app"
          : "http://localhost:5173"
      }
      logoutUri={
        process.env.NODE_ENV === "production"
          ? "https://todo-app-black-omega.vercel.app"
          : "http://localhost:5173"
      }
    >
      <UserProvider>
        <App />
      </UserProvider>
    </KindeProvider>
  </React.StrictMode>
);
