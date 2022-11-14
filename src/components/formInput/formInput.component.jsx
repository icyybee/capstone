import './formInput.styles.scss';

const FormInput = ({label, ...otherProps}) => {
    return (
        <div className="group">
            <input className="form-input" {...otherProps} />
            {
                label && ( //if label exists render the label
                    <label 
                        className={`${
                            otherProps.value.length ? 'shrink' : ''
                        } form-input-label`}
                    >
                        {label}
                    </label>
                )
            }
        </div>
    )
}

export default FormInput;