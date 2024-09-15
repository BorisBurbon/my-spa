import React, { ReactNode } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

interface CustomModalProps {
	open: boolean;
	handleClose: () => void;
	title: string;
	children: ReactNode;
}
const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: 2,
};

const btnStyle ={
	position: 'absolute',
	right: 8,
	top: 8,
}

export const CustomModal: React.FC<CustomModalProps> = ({ open, handleClose, title, children }) => {
	return (
		<Modal
			open={open}
			onClose={handleClose}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			<Box sx={modalStyle} >
				<IconButton
					aria-label="close"
					onClick={handleClose}
					sx={{
						...btnStyle,
						color: (theme) => theme.palette.grey[500],
					}}
				>
					<CloseIcon />
				</IconButton>
				<Typography variant="h5" component="div">
					{title}
				</Typography>
				{children}
			</Box>
		</Modal>
	);
};
