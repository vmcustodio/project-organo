import Colaborador from "../Colaborador";
import "./time.css";
import hexToRgba from "hex-to-rgba";

const Time = ({ time, colaboradores, aoDeletar, mudarCor, aoFavoritar }) => {
  return (
    colaboradores.length > 0 && (
      <section
        className="time"
        style={{
          backgroundImage: "url(/imagens/fundo.png)",
          backgroundColor: hexToRgba(time.cor, "0.6"),
        }}
      >
        <input
          value={time.corSecundaria}
          onChange={(evento) => mudarCor(evento.target.value, time.id)}
          type="color"
          className="input-cor"
        />
        <h3 style={{ borderColor: time.corSecundaria }}>{time.nome}</h3>
        <div className="colaboradores">
          {colaboradores.map((colaborador, indice) => (
            <Colaborador
              key={indice}
              colaborador={colaborador}
              corDeFundo={time.cor}
              aoDeletar={aoDeletar}
              aoFavoritar={aoFavoritar}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default Time;
