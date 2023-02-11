import "./button.css";

export const Button = ({ children, onClick, variant,variante, icon }) => {
  return (
    <button
      onClick={onClick}
      className={`button-container ${
        variant === "outline" ? "outline" : "main" &&
        /*codigo adicional*/
        variante === "transparent" ? "transparent" :"main"
      }`}
    >
      {icon && (
        <img
          src={`/images/${icon}.png`}
          className="button-icon"
          alt={`supermarket_icon_${icon}`}
        />
      )}
      {children}
    </button>
  );
};
