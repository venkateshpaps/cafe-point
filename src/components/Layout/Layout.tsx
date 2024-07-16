import Header from "../Header/Header";
import { Outlet } from "react-router-dom";

interface LayoutProps {
    isNavigationOptions?: boolean;
}

const Layout: React.FunctionComponent<LayoutProps> = (props) =>{
    return (
        <div>
            <Header isNavigationOptions={props.isNavigationOptions ? true : false} />
            <Outlet />
        </div>
    );
}
export default Layout;