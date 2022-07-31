import "./src/index.css";
import github from "./src/img/github.png";
import linkedin from "./src/img/linkedin.png";

function FooterCredits({ className }) {
     return (
          <footer className="footerContainer">
               <div className="developBox">
                    <small className="smallDevelopBy">Developed by: </small>
                    <h2 className="titleDevelopBy">Matheus Vieira</h2>
               </div>
               <div className="socialBox">
                    <a href="https://github.com/th-matheus">
                         <img
                              className={`socialImg github ${className}`}
                              src={github}
                              alt=""
                         />
                    </a>
                    <a href="https://www.linkedin.com/in/th-matheus/">
                         <img
                              className={`socialImg linkedin ${className}`}
                              src={linkedin}
                              alt=""
                         />
                    </a>
               </div>
          </footer>
     );
}

export default FooterCredits;
