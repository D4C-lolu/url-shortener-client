import HomeContainer from "./containers/Home";
import HandleRedirectContainer from "./containers/HandleRedirect";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeContainer />} />
        <Route path="/:shortId" element={<HandleRedirectContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
