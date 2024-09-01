interface IButton {
  text: string;
  fnc?: "submit" | "reset" | "button";
  setParams?: () => void;
  color?: string;
  retry?: () => void;
  disabled?: boolean;
}

const Button = ({
  text,
  fnc,
  setParams,
  color,
  disabled,
  retry,
}: IButton) => {
  return (
    <button
      type={fnc || "button"}
      onClick={() => {
        if (fnc === "reset" && setParams) {
          setParams();
        } else if (retry) {
          retry();
        }
      }}
      disabled={disabled}
      className={`group/button max-md:hidden relative inline-flex items-center ${
        color ? "bg-${color}-300" : "bg-blue-500"
      }  justify-center overflow-hidden rounded-md bg-${
        color ? color : "blue"
      }-600 backdrop-blur-lg px-4 py-2 text-base font-semibold text-white transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-gray-600/50 z-40 ${
        disabled ? "disabled:bg-blue-300" : ""
      }`}
    >
      <span className="text-lg">{text}</span>
      <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
        <div className="relative h-full w-10 bg-white/20"></div>
      </div>
    </button>
  );
};

export default Button;
