import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./store/store.jsx";
import { ParallaxProvider } from "react-scroll-parallax";
import { fetchRecipes } from "./store/recipeSlice.jsx";
import { ToastContainer } from "react-toastify";

store.dispatch(fetchRecipes());

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <ParallaxProvider>
        <ToastContainer />
        <App />
      </ParallaxProvider>
    </Provider>
  </StrictMode>
);
