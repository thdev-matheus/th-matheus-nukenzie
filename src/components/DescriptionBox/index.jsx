import "./src/index.css";

function DescriptionBox({ setDescription }) {
     return (
          <div className="descriptionBox">
               <label className="label" htmlFor="descricao">
                    Descrição
               </label>
               <input
                    className="descriptionInput"
                    type="text"
                    name="descricao"
                    placeholder="Digite aqui sua descrição"
                    onChange={(e) => {
                         let value = e.target.value;
                         setDescription(value);
                    }}
               />
               <small className="smallDescription">Ex: compra de roupas</small>
          </div>
     );
}

export default DescriptionBox;
