export default {
    formValid:  ({formErrors, ...rest}) => {
        let valid = true;
        Object.values(formErrors).forEach(val => {
            return (val.length > 0 && (valid = false))
        });

        Object.values(rest).forEach(val => {
            val === null && (valid = false)
        });

        return valid;
    },
    EMAIL_REGEXP: RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/),
    PHONE_REGEXP: RegExp(/^\d{3}\d{3}\d{3}$/),
}