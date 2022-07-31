import Button from "../Button";
import DescriptionBox from "../DescriptionBox";
import ValueBox from "../ValueBox";
import TypeValueBox from "../TypeValueBox";
import "./src/index.css";

function Form({ callback, setDescription, setValue, setValueType, total }) {
     return (
          <div className="boxFormContainer">
               <form className="formContainer" onSubmit={callback}>
                    <DescriptionBox setDescription={setDescription} />

                    <div className="entriesBox">
                         <ValueBox setValue={setValue} />
                         <TypeValueBox setValueType={setValueType} />
                    </div>
                    <Button
                         name="Inserir valor"
                         color="#fff"
                         bgColor="#FD377E"
                         width="230px"
                         height="50px"
                         fontSize="16px"
                         display="flex"
                         className="buttonDesktop"
                    />
               </form>
               <section className="containerTotalValue">
                    <div className="boxTotalValue">
                         <h3 className="titleTotalValue">Valor total:</h3>
                         <h3 className="TotalValue">{`R$ ${total},00`}</h3>
                    </div>
                    <small className="descriptionTotalValue">
                         O valor se refere ao saldo
                    </small>
               </section>
          </div>
     );
}

export default Form;
