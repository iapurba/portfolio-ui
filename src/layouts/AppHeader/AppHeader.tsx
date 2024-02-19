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
import { useEffect, useState } from 'react';
import { Divider } from '@mui/material';

interface AppHeaderProps {
    navItems: {
        name: string;
        url: string;
    }[];
    children: React.ReactNode;
}

export const AppHeader: React.FC<AppHeaderProps> = ({
    navItems,
    children,
}) => {

    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset ||
                document.documentElement.scrollTop;
            setIsScrolled(scrollTop > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <div>
            {/* <Box display={"flex"} justifyContent={"space-between"}>
                <Logo name="SD" url="#" />
                <IconButton
                    color="primary"
                    aria-label="open drawer"
                    edge="end"
                    onClick={handleDrawerToggle}
                >
                    <CloseIcon />
                </IconButton>
            </Box> */}
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
        </div>
    );

    const container = window !== undefined
        ? () => window.document.body : undefined;

    return (
        <Box>
            <CustomAppBar
                className='app-header'
                onScroll={() => setIsScrolled(true)}
                sx={{
                    backgroundColor: isScrolled
                        ? "#FFFFFF" : "transparent"
                }}>
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
                    }}
                >
                    <AppHeaderContentWrapper sx={{ padding: "12px 16px" }}>
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
                    {drawer}
                </Drawer>
            </nav>
            <Box margin={"auto"} paddingTop={`${isScrolled ? '72px' : '0'}`}>
                {children}
            </Box>
        </Box>
    );
}

export default AppHeader;