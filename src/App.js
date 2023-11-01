import PaginaPadrao from "componentes/PaginaPadrao/PaginaPadrao";
import PostConteudo from "componentes/PostConteudo/PostConteudo";
import Rodape from "componentes/Rodapé/Rodape";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./componentes/Inicio/Inicio";
import Menu from "./componentes/Menu/Menu";
import NotFound from "./componentes/NotFound/NotFound";
import SobreMim from "./componentes/SobreMim/SobreMim";


function App() {
  return (
    <BrowserRouter>
        <Menu/>
      <Routes>
        <Route path="/" element={<PaginaPadrao/>}>
          <Route index element={<Inicio />} />
          <Route path="sobremim" element={<SobreMim />} />
          <Route path="posts/:id" element={<PostConteudo/>}></Route>
        </Route>
        <Route path="*" element={<NotFound/>} />
      </Routes>
      <Rodape/>
    </BrowserRouter>
  );
}

export default App;
