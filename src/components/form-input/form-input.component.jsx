const FormInput = ({ label, elementName, errorMessage, props }) => {
    const formInputStyle = {
        label: 
            "text-md text-gray-900\
            absolute left-1 -top-6\
            transition-all\
            peer-focus:text-orange-400\
            peer-focus:text-md\
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
            peer\
        ",
        formInvalid:
            "w-full p-1 py-1.5 text-gray-600\
            ring-pink-500 border-pink-500\
            border-0 border-pink-500 rounded-md shadow-sm ring-1 ring-inset ring-gray-300\
            hover:ring-pink-500\
            focus:outline-none\
            focus:ring-1\
            focus:ring-inset\
            focus:ring-pink-600\
            focus:invalid\
            peer\
        ",
    }
    return(
        <div className="relative mt-9">
            {/* Input */}
            <input
                id={elementName}
                name={elementName}
                aria-label={label}
                className={errorMessage && formInputStyle["formInvalid"] || formInputStyle["form"]}
                {...props}/>
            {/* Label */}
            <label 
                htmlFor={elementName}
                className={formInputStyle["label"]}>
                {label}
            </label>
            {/* Error Message */}
            <p 
                name={"errorMessageof" + elementName}
                className={formInputStyle["errorMessage"]}>
                {errorMessage}
            </p>
        </div>
    );
};
export default FormInput;