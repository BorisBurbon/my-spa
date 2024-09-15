const REQUIRED_FIELD = 'Required field';

export const loginValidation = {
    required: REQUIRED_FIELD,
    validate: (value: string) => {
        if(value.match(/[а-яА-Я]/)) {
    		return 'Login cannot contain Cyrillic characters'
        }
        return true;
    }
};

export const passwordValidation = {
    required: REQUIRED_FIELD,
    validate: (value: string) => {
        if(value.length < 6) {
            return 'The password must be longer than 6 characters.'
        }
        return true;
    }
};
