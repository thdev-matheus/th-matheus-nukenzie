import logoBranca from "./src/img/logoBranca.svg";
import logoPreta from "./src/img/logoPreta.svg";

function Logo({ color, width }) {
     return (
          <img
               width={width}
               src={color === "branca" ? logoBranca : logoPreta}
               alt="logo"
          />
     );
}

export default Logo;
