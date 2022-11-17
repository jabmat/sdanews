import React from 'react';
import { NavbarProps as UserPageProps } from '../../helpers/interfaces';
import { auth } from '../../firebaseConfig';
import { Typography, Button } from '@mui/material';
import { signOut } from 'firebase/auth';
import ProfilePhotoForm from '../ProfilePhotoForm/ProfilePhotoForm';

const UserPage: React.FC<UserPageProps> = ({ loggedIn }) => {
	return (
		<>
			{loggedIn && auth.currentUser && (
				<>
					<Typography
						variant="h2"
						align="center"
						sx={{
							fontSize: '2rem',
							my: '1rem',
							borderBottom: '1px solid #1976d2',
							pb: '.5rem',
						}}>
						Your Profile
					</Typography>
					<Typography
						variant="h5"
						align="center"
						sx={{
							fontSize: '1rem',
							my: '1rem',
							fontFamily: 'Roboto',
							mx: 'auto',
						}}>
						{auth.currentUser.email}
					</Typography>
					<ProfilePhotoForm />
					<Button
						variant="outlined"
						sx={{ display: 'block', mx: 'auto', my: '1rem' }}
						onClick={() => signOut(auth)}>
						Log out
					</Button>
				</>
			)}
		</>
	);
};

export default UserPage;

// zad. 2
// treść
// 1. Stwórz Route w App.tsx, path="/user", element UserPage (czyli ten komponent)
// 2. Przekaż propsem z App.tsx do UserPage stan loggedIn, otypuj odpowiednio UserPage
// JSX:
// 3. Stwórz react fragment, w środku od razu renderowanie warunkowe
// Jeżeli loggedIn jest prawdziwe i auth.currentUser jest prawdziwe wyrenderuj:
// 4. React fragment:
// W RF:
// 5. Typography variant h2, align center, w sx'ach: fontSize 2rem, my 1rem, borderBottom 1px solid #1976d2, pb .5rem. TextContent: Your profile
// 6. Typography variant h5, align center, w sx'ach: fontSize 1rem, my 1rem, fontFamily Roboto, mx auto. TextContent: email aktualnie zalogowanego użytkownika (jest dostępny gdzieś w obiekcie auth)
// 7. Button (MUI) variant outlined, w sx'ach: display block, mx auto, my 1rem. Po kliknięciu na button, wywołaj funkcję signOut (firebase/auth, przyjmuje jako argument obiekt auth). TextContent: Log out.
// {x && y.z && <h1>123</h1>}

// {
// 	loggedIn ? (
// 		<IconButton sx={{ p: 0 }}>
// 			<Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
// 		</IconButton>
// 	) : (
// 		<Button sx={{ my: 2, color: 'white', display: 'block' }}>Log in</Button>
// 	);
// }
