import "./src/index.css";

function TypeValueBox({ setValueType }) {
     return (
          <div className="boxType">
               <label className="label" htmlFor="tipoValor">
                    Tipo de valor
               </label>
               <select
                    className="inputType"
                    name="tipoValor"
                    onChange={(e) => {
                         let value = e.target.value;
                         setValueType(value);
                    }}
               >
                    <option className="opt" value="Entrada">
                         Entrada
                    </option>
                    <option className="opt" value="Saida">
                         Saida
                    </option>
               </select>
          </div>
     );
}

export default TypeValueBox;
