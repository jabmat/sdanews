import { Button, Card, Typography } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';

const ProfilePhotoForm = () => {
	const { register, handleSubmit } = useForm();

	const uploadPhoto = () => {};

	return (
		<form onSubmit={handleSubmit(uploadPhoto)}>
			<Card sx={{ p: '1rem' }}>
				<Typography variant="h6" align="center" sx={{ fontSize: '1rem' }}>
					Upload your profile picture
				</Typography>
				<Button
					variant="contained"
					component="label"
					sx={{
						display: 'block',
						mx: 'auto',
						my: '1rem',
						alignContent: 'center',
					}}>
					<Typography variant="h6" align="center" sx={{ fontSize: '1rem' }}>
						Select a file
					</Typography>
					<input
						hidden
						type="file"
						{...register('profilePhoto', { required: true })}
					/>
				</Button>
				<Button
					type="submit"
					variant="contained"
					sx={{ display: 'block', mx: 'auto' }}>
					Upload
				</Button>
			</Card>
		</form>
	);
};

export default ProfilePhotoForm;

// zad. 3
// treść
// 1. Import i wywołanie useForm
// 2. Stwórz pustą funkcję uploadPhoto
// JSX:
// 3. <form> (HTMLowy) z onSubmitem tak jak w poprzednich przykładach
// W formie:
// 4. Card (MUI) sx: p 1rem
// W Card:
// 5. Typography variant h6, align center, w sx'ach: fontSize 1rem. TextContent: Upload your profile picture
// 6. Button (MUI) variant contained, component label, w sx'ach: display block, mx auto, my 1rem, alignContent center
// W środku Buttona:
// 7. Typography variant h6, align center, sx: fontSize 1rem. TextContent Select a file
// (Nadal w buttonie)
// 8. input (hmtlowy) type="file", hidden, zarejestruj go pod nazwą profilePhoto
// koniec buttona
// 9. Button (MUI), type submit, variant contained, sx: display block, mx auto. TextContent: Upload
