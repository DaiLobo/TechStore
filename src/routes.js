import { Home } from "pages/Home";
import { PatternPage } from "components/PatternPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Categoria } from "pages/Categoria";
import { Carrinho } from "pages/Carrinho";
import { Anuncie } from "pages/Anuncie";
import { Pagamento } from "pages/Pagamento";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PatternPage />}>
          <Route index element={<Home />} />
          <Route path="/categoria/:nomeCategoria" element={<Categoria />} />
          <Route path="/carrinho" element={<Carrinho />} />
          <Route path="/anuncie/:nomeCategoria" element={<Anuncie />} />
          <Route path="/anuncie" element={<Anuncie />} />
          <Route path="/pagamento" element={<Pagamento />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
