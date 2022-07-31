import "../../cssGlobal/hover/hover.css";
import "./src/index.css";

function Button({
     name,
     color,
     bgColor,
     width,
     height,
     fontSize,
     callBack,
     display,
     className,
}) {
     const buttonStyle = {
          color: color,
          backgroundColor: bgColor,
          width: width,
          height: height,
          fontSize: fontSize,
          display: display,
          justifyContent: "center",
          alignItems: "center",
          fontWeight: "bold",
          borderRadius: "10px",
          border: "none",
     };

     return (
          <button
               style={buttonStyle}
               className={`${className} hvr-pulse-shrink compButton`}
               onClick={callBack}
          >
               {name}
          </button>
     );
}

export default Button;
