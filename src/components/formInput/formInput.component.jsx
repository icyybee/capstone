import {FormInputLabel, Input, Group} from './formInput.styles';

const FormInput = ({label, ...otherProps}) => {
    return (
        <Group>
            <Input {...otherProps} />
            {label && ( //if label exists render the label
                <FormInputLabel shrink={otherProps.value.length}>{label}</FormInputLabel>
            )}
        </Group>
    )
}

export default FormInput;