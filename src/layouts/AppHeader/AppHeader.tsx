import Toolbar from "@mui/material/Toolbar";
import { AppHeaderContentWrapper, AppHeaderWrapper, MenuLink } from "./AppHeader.styles";
import CustomButton from "../../common/CustomButton/CustomButton";
import Logo from "../../common/Logo/Logo";

interface MenuItem {
    name: string;
    url: string;
}

interface AppHeaderProps {
    menuItems: MenuItem[]
}
const AppHeader: React.FC<AppHeaderProps> = ({ menuItems }) => {
    return (
        <AppHeaderWrapper className='app-header'>
            <Toolbar sx={{padding: 0, margin: 0}}>
                {/* Left side: Logo */}
                <AppHeaderContentWrapper sx={{ flexGrow: 1 }}>
                    <Logo name="SD" url="#" />
                </AppHeaderContentWrapper>

                {/* Right side: Menu items */}
                <AppHeaderContentWrapper>
                    {menuItems.map((item, index) => {
                        return (
                            <MenuLink
                                className="menu-item"
                                key={index}
                                href={item.url}
                                underline="none"
                            >
                                {item.name}
                            </MenuLink>
                        )
                    })}
                    <CustomButton
                        variant="outlined"
                        label="Download CV"
                        onClick={() => ({})}
                    />
                </AppHeaderContentWrapper>
            </Toolbar>
        </AppHeaderWrapper >
    );
};

export default AppHeader;