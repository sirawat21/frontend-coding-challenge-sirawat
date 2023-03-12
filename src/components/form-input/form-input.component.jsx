const FormInput = ({ props }) => {
    const formInputStyle = {
        label: 
            "text-md text-gray-900\
        ",
        errorMessage:
            "text-xs\
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
            className={formInputStyle["form"]}
            {...props}/>
            <label className={formInputStyle["label"]}>Label</label>
            <p className={formInputStyle["errorMessage"]}>ErrorMessage</p>
        </>
    );
};
export default FormInput;