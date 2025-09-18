import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { AuthProvider } from "./hooks/useAuth";
import { CartProvider } from "./hooks/useCart";
import { Toaster } from "./components/ui/toaster";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <AuthProvider>
      <CartProvider>
        <App />
        <Toaster />
      </CartProvider>
    </AuthProvider>
  </BrowserRouter>
);
