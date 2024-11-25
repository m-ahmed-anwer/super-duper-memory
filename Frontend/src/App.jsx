import React from "react";
import ViewRecipe from "./routes/ViewRecipe.jsx";
import Layout from "./components/Layout.jsx";
import AddRecipe from "./routes/AddRecipe.jsx";
import EditRecipe from "./routes/EditRecipe.jsx";
import NotFound from "./components/NotFound.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DisplayDetail from "./routes/DisplayDetail.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ViewRecipe />} />
          <Route path="add-recipe" element={<AddRecipe />} />
          <Route path="edit-recipe/:recipeId" element={<EditRecipe />} />
          <Route path="view-recipe/:recipeId" element={<DisplayDetail />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
