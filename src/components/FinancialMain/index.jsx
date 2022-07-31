import "./src/index.css";
import noLaunchs from "./src/img/noLaunchs.png";
import buttonTrash from "./src/img/buttonTrash.png";

function FinancialMain({
     render,
     setRender,
     database,
     setDatabase,
     calculateTotal,
     setTotal,
}) {
     return (
          <div className="financialMain">
               {database.length > 0 ? (
                    render.map((element, index, arr) => {
                         return (
                              <div key={index} className="card">
                                   <div
                                        className="colorCard"
                                        style={{
                                             backgroundColor:
                                                  element.type === "Entrada"
                                                       ? "#03b898"
                                                       : "#E9ECEF",
                                        }}
                                   ></div>
                                   <div className="cardDescription">
                                        <h3 className="cardTitle">
                                             {element.description}
                                        </h3>
                                        <small className="cardType">
                                             {element.type}
                                        </small>
                                   </div>
                                   <p className="cardPrice">{`R$ ${element.value},00`}</p>
                                   <img
                                        id={index}
                                        className="cardTrash"
                                        src={buttonTrash}
                                        alt=""
                                        onClick={(e) => {
                                             let id = parseInt(e.target.id);
                                             database.splice(id, 1);
                                             setDatabase([...database]);
                                             setRender([...database]);
                                             setTotal(
                                                  calculateTotal([...database])
                                             );
                                        }}
                                   />
                              </div>
                         );
                    })
               ) : (
                    <img className="imgNoLaunchs" src={noLaunchs} alt="" />
               )}
          </div>
     );
}

export default FinancialMain;
