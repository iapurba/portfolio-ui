import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import {
    AppHeaderContentWrapper, CloseIcon,
    CustomAppBar, HamburgerIcon, MenuLink
} from './AppHeader.styles';
import Logo from '../../common/Logo/Logo';
import CustomButton from '../../common/CustomButton/CustomButton';
import { Divider } from '@mui/material';

interface AppHeaderProps {
    navItems: {
        name: string;
        url: string;
    }[];
    isScrolled: boolean;
    activeMenuItem: string;
    onMenuClick: (page: string) => void;
}

export const AppHeader: React.FC<AppHeaderProps> = ({
    navItems,
    isScrolled,
    activeMenuItem,
    onMenuClick,
}) => {

    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const container = window !== undefined
        ? () => window.document.body : undefined;

    return (
        <Box>
            <CustomAppBar
                className='app-header'
                isScrolled={isScrolled}
            >
                <AppHeaderContentWrapper>
                    <Logo name="SD" url="#" />
                    <Box className="nav-menu-container"
                        sx={{
                            display: { xs: 'none', sm: 'block' }
                        }}>
                        {navItems.map((item, index) => (
                            <MenuLink
                                className="menu-item"
                                key={index}
                                href={item.url}
                                underline="none"
                                isActive={activeMenuItem === item.name.toLowerCase()}
                                onClick={() => {
                                    onMenuClick(item.name.toLowerCase())
                                }}
                            >
                                {item.name}
                            </MenuLink>
                        ))}
                        <CustomButton
                            variant="outlined"
                            label="Download CV"
                            onClick={() => ({})}
                        />
                    </Box>
                    <Box sx={{
                        display: { xs: 'block', sm: 'none' }
                    }}>
                        <IconButton
                            color="primary"
                            aria-label="open drawer"
                            edge="end"
                            onClick={handleDrawerToggle}
                        >
                            <HamburgerIcon />
                        </IconButton>
                    </Box>
                </AppHeaderContentWrapper>
            </CustomAppBar>
            <nav>
                <Drawer
                    container={container}
                    anchor="top"
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box' },
                        zIndex: 9999,
                    }}
                >
                    <AppHeaderContentWrapper sx={{ padding: "6px 16px" }}>
                        <Logo name="SD" url="#" />
                        <Box sx={{
                            display: { xs: 'block', sm: 'none' }
                        }}>
                            <IconButton
                                color="primary"
                                aria-label="open drawer"
                                edge="end"
                                onClick={handleDrawerToggle}
                            >
                                <CloseIcon />
                            </IconButton>
                        </Box>
                    </AppHeaderContentWrapper>
                    <Divider />
                    <List>
                        {navItems.map((item, i) => (
                            <ListItem key={item.name}>
                                <MenuLink
                                    className="menu-item"
                                    key={i}
                                    href={item.url}
                                    underline="none"
                                    sx={{ textAlign: "center" }}
                                    onClick={handleDrawerToggle}
                                    isActive={activeMenuItem === item.name.toLowerCase()}
                                >
                                    {item.name}
                                </MenuLink>
                            </ListItem>
                        ))}
                        <ListItem key={navItems.length}>
                            <CustomButton
                                variant="outlined"
                                label="Download CV"
                                onClick={() => ({})}
                            />
                        </ListItem>
                    </List>
                </Drawer>
            </nav>
        </Box>
    );
}

export default AppHeader;