import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Logo from "../../components/Logo";
import ilustration from "./src/img/ilustration.png";
import "./src/index.css";

function Login() {
     return (
          <main className="mainContainer">
               <section className="infoContainer">
                    <Logo color="branca" width="200" />
                    <div className="boxTitle">
                         <span>Centralize o </span>
                         <span>controle das suas</span>
                         <span>finanças</span>
                    </div>
                    <small className="description">
                         de forma rápida e segura
                    </small>
                    <Link to="/home" style={{ textDecoration: "none" }}>
                         <Button
                              name="Entrar"
                              color="#fff"
                              bgColor="#fd377e"
                              width="200px"
                              height="50px"
                              fontSize="14pt"
                         />
                    </Link>
               </section>

               <section className="imgContainer">
                    <img className="image" src={ilustration} alt="" />
               </section>
          </main>
     );
}

export default Login;
