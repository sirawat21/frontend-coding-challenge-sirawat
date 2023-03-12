const FormInput = ({ label, elementName, ariaLabel, props }) => {
    const formInputStyle = {
        label: 
            "text-md text-gray-900\
            absolute left-1 -top-6\
            transition-all\
        ",
        errorMessage:
            "text-pink-600 text-xs\
        ",
        form:        
            "w-full p-1 py-1.5 text-gray-900\
            border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300\
            hover:ring-gray-400\
            focus:outline-none\
            focus:ring-1\
            focus:ring-inset\
            focus:ring-orange-600\
        ",
        formInvalid:
            "\
        ",
    }
    return(
        <div className="relative mt-9">
            <input
                id={elementName}
                name={elementName}
                aria-label={ariaLabel}
                className={formInputStyle["form"]}
                {...props}/>
            <label 
                htmlFor={elementName}
                className={formInputStyle["label"]}>
                {label}
            </label>
            <p className={formInputStyle["errorMessage"]}>ErrorMessage</p>
        </div>
    );
};
export default FormInput;