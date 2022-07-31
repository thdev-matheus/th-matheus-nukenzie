import { Link } from "react-router-dom";
import { useState } from "react";
import Form from "../../components/Form";
import Logo from "../../components/Logo";
import Button from "../../components/Button";
import FinancialBox from "../../components/FinancialBox";
import "./src/index.css";
import "../../cssGlobal/hover/hover.css";
import FooterCredits from "../../components/footerCredits";

function Home() {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [valueType, setValueType] = useState("Entrada");
  const [database, setDatabase] = useState([]);
  const [render, setRender] = useState([]);
  const [total, setTotal] = useState(0);
  const [open, setOpen] = useState(false);

  const cleanInputs = () => {
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );
  };

  const calculateTotal = (arr) => {
    const filterPrice = arr.map((element) => element.value);

    return filterPrice.reduce((a, b) => a + b, 0);
  };

  const update = (arr) => {
    setTotal(calculateTotal(arr));
    setDatabase(arr);
    setRender(arr);
    cleanInputs();
  };

  return (
    <>
      <header className="headerContainer">
        <Logo color="preta" width="150px" />
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button
            name="Inicio"
            color="#5B6166"
            bgColor="#E9ECEF"
            width="65px"
            height="40px"
            display="flex"
          />
        </Link>
      </header>
      <main className="containerMain">
        <Form
          setDescription={setDescription}
          setValue={setValue}
          setValueType={setValueType}
          setRender={setRender}
          setDatabase={setDatabase}
          database={database}
          total={total}
          callback={(e) => {
            e.preventDefault();
            let newLaunch = {
              description: description,
              value: valueType === "Entrada" ? +value : -value,
              type: valueType,
            };

            update([newLaunch, ...database]);
          }}
        />
        <FinancialBox
          setTotal={setTotal}
          calculateTotal={calculateTotal}
          render={render}
          setRender={setRender}
          database={database}
          setDatabase={setDatabase}
        />
      </main>
      <FooterCredits />
    </>
  );
}

export default Home;
