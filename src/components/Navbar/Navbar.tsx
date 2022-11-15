import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from 'react-router-dom';
import { NavbarProps } from '../../helpers/interfaces';

const pages = ['Home', 'Search'];

const Navbar: React.FC<NavbarProps> = ({ loggedIn }) => {
	const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	return (
		<AppBar position="static">
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit">
							<MenuIcon />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'left',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'left',
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: 'block', md: 'none' },
							}}>
							{pages.map((page) => (
								<Link
									key={page}
									to={page === 'Home' ? '/' : page.toLowerCase()}
									style={{ textDecoration: 'none', color: 'black' }}>
									<MenuItem key={page} onClick={handleCloseNavMenu}>
										<Typography textAlign="center">{page}</Typography>
									</MenuItem>
								</Link>
							))}
						</Menu>
					</Box>
					<Typography
						variant="h5"
						noWrap
						component="a"
						href=""
						sx={{
							mr: 2,
							display: { xs: 'flex', md: 'none' },
							flexGrow: 1,
							fontFamily: 'Robot',
							fontWeight: 100,
							letterSpacing: '.3rem',
							color: 'inherit',
							textDecoration: 'none',
						}}>
						{/*  */}
						SDA NEWS
					</Typography>

					<Box sx={{ flexGrow: 0 }}>
						{/* zad. 1 */}
						{/* treść */}
						{/* 1. W zależności od stanu loggedIn, ustaw atrybut "to" Linka na "/user" lub "/login". Jeżeli loggedIn jest równe true, to "/user", jeżeli loggedIn jest równe false to "/login" */}

						{/* recover */}
						{/* <Link to="/login" style={{ textDecoration: 'none' }}> */}

						{/* rozwiązanie MJ */}
						<Link
							to={loggedIn ? '/user' : '/login'}
							style={{ textDecoration: 'none' }}>
							{/*rozwiązanie SDA  */}

							{/* zad. 1 pt.2 */}
							{/* treść */}
							{/* Renderowanie warunkowe: jeżeli loggedIn jest równe true, wyświetl IconButton (po prostu to co już jest), jeżeli loggedIn jest równy false, wyświetl Button (MUI), w sx'ach my 2, color white, display block. TextContent: Log in */}
							{loggedIn ? (
								<IconButton sx={{ p: 0 }}>
									<Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
								</IconButton>
							) : (
								<Button sx={{ my: 2, color: 'white', display: 'block' }}>
									Log In
								</Button>
							)}
						</Link>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
export default Navbar;
