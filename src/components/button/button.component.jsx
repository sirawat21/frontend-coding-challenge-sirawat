const Button = ({ children, props }) => {
    const buttonStyle = {
        default: "rounded-md bg-white py-2 px-3 text-sm font-helvetica text-gray-500 shadow-sm\
        ring-1 ring-inset ring-gray-300\
        hover:bg-gray-100\
        focus-visible:outline\
        focus-visible:outline-2\
        focus-visible:outline-offset-2\
        focus-visible:outline-cyan-500\
        ",
    }
    return(
        <button {...props} className={buttonStyle['default']}>
            {children}
        </button>
    );
};
export default Button;
