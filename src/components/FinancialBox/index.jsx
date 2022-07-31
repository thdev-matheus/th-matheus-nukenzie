import FinancialHeader from "../FinancialHeader";
import FinancialMain from "../FinancialMain";
import "./src/index.css";

function FinancialBox({
     render,
     setRender,
     database,
     setDatabase,
     calculateTotal,
     setTotal,
}) {
     return (
          <section className="financialBox">
               <FinancialHeader
                    render={render}
                    setRender={setRender}
                    database={database}
                    setDatabase={setDatabase}
               />
               <FinancialMain
                    setTotal={setTotal}
                    calculateTotal={calculateTotal}
                    render={render}
                    setRender={setRender}
                    database={database}
                    setDatabase={setDatabase}
               />
          </section>
     );
}

export default FinancialBox;
