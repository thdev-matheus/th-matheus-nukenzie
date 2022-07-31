import "./src/index.css";

function ValueBox({ setValue }) {
     return (
          <div className="boxValue">
               <label className="label" htmlFor="value">
                    Valor
               </label>
               <input
                    className="valueInput"
                    name="value"
                    type="number"
                    min="1"
                    max="9999"
                    onChange={(e) => {
                         let value = e.target.value;
                         setValue(value);
                    }}
                    required
               />
          </div>
     );
}

export default ValueBox;
