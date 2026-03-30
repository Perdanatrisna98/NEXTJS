import NavbarComponent from "../components/navbar/navbar.module";
import SidebarComponent from "../components/sidebar/sidebar.module";
import Main from "./main/main.module";

export default function Dashboard() {
    return(
    <main>
        {/* <NavbarComponent /> */}
        <SidebarComponent />
        <Main />
    </main>
    )
}