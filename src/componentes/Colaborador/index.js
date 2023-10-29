import "./colaborador.css";
import { BsFillTrashFill } from "react-icons/bs";

const Colaborador = ({ colaborador, corDeFundo, aoDeletar }) => {
  return (
    <div className="colaborador">
      <BsFillTrashFill className="deletar" onClick={aoDeletar} />
      <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
        <img src={colaborador.imagem} alt={colaborador.nome} />
      </div>
      <div className="rodape">
        <h4>{colaborador.nome}</h4>
        <h5>{colaborador.cargo}</h5>
      </div>
    </div>
  );
};

export default Colaborador;
