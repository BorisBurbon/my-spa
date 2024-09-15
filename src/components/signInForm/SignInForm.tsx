import React from 'react';
import { useForm, SubmitHandler, Controller, useFormState } from "react-hook-form";
import { Box, Button, TextField } from '@mui/material';

import { loginValidation, passwordValidation } from './validation';

interface ISignInForm {
	login: string;
	password: string;
}

interface SignInFormProps {
	onSubmit: SubmitHandler<ISignInForm>;
	handleClose: () => void;
}

export const SignInForm: React.FC<SignInFormProps> = ({ onSubmit, handleClose }) => {
	const { handleSubmit, control } = useForm<ISignInForm>();
	const { errors } = useFormState({ control });

	return (
		<form className="auth-form__form" onSubmit={handleSubmit(onSubmit)}>
			<Controller
				control={control}
				name="login"
				rules={loginValidation}
				render={({ field }) => (
					<TextField
						label="Login"
						onChange={(e) => field.onChange(e)}
						value={field.value || ''}
						fullWidth={true}
						size="small"
						margin="normal"
						className="auth-form__input"
						error={!!errors.login?.message}
						helperText={errors?.login?.message}
					/>
				)}
			/>
			<Controller
				control={control}
				name="password"
				rules={passwordValidation}
				render={({ field }) => (
					<TextField
						label="Password"
						onChange={(e) => field.onChange(e)}
						value={field.value || ''}
						fullWidth={true}
						size="small"
						margin="normal"
						type="password"
						className="auth-form__input"
						error={!!errors?.password?.message}
						helperText={errors?.password?.message}
					/>
				)}
			/>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
                <Button
                    type="button"
                    variant="outlined"
                    fullWidth={true}
                    disableElevation={true}
					sx={{ marginRight: 1, marginTop: 3 }}
                    onClick={handleClose}
                >
                    Cancel
                </Button>
                <Button
                    type="submit"
                    variant="contained"
                    fullWidth={true}
					sx={{ marginLeft: 1, marginTop: 3 }}
                    disableElevation={true}
                >
                    Submit
                </Button>
            </Box>
		</form>
	);
};
