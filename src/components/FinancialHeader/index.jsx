import Button from "../Button";
import "./src/index.css";

function FinancialHeader({ setRender, database }) {
     return (
          <div className="financialHeader">
               <h3 className="financialTitle">Resumo financeiro</h3>
               <div className="filterBox">
                    <Button
                         name="Todos"
                         color="#5B6166"
                         bgColor="#E9ECEF"
                         width="80px"
                         height="40px"
                         display="flex"
                         className="hvr-shutter-out-horizontal filter"
                         callBack={() => {
                              setRender([...database]);
                         }}
                    />
                    <Button
                         name="Entradas"
                         color="#5B6166"
                         bgColor="#E9ECEF"
                         width="80px"
                         height="40px"
                         display="flex"
                         className="hvr-shutter-out-horizontal filter"
                         callBack={() => {
                              const entradas = database.filter((element) => {
                                   return element.type === "Entrada";
                              });
                              setRender([...entradas]);
                         }}
                    />
                    <Button
                         name="Saídas"
                         color="#5B6166"
                         bgColor="#E9ECEF"
                         width="80px"
                         height="40px"
                         display="flex"
                         className="hvr-shutter-out-horizontal filter"
                         callBack={() => {
                              const saidas = database.filter((element) => {
                                   return element.type === "Saida";
                              });
                              setRender([...saidas]);
                         }}
                    />
               </div>
          </div>
     );
}

export default FinancialHeader;
