const FormInput = ({ props }) => {
    return(
        <>
            <input {...props}/>
            <label>Label</label>
            <p>ErrorMessage</p>
        </>
    );
};
export default FormInput;