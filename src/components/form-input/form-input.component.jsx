const FormInput = ({ label, elementName, props }) => {
    const formInputStyle = {
        label: 
            "text-md text-gray-900\
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
        <>
            <input
                id={elementName}
                name={elementName}
                className={formInputStyle["form"]}
                {...props}/>
            <label 
                htmlFor={elementName}
                className={formInputStyle["label"]}>
                {label}
            </label>
            <p className={formInputStyle["errorMessage"]}>ErrorMessage</p>
        </>
    );
};
export default FormInput;