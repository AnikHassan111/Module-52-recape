import BreakingNewsSlider from "../../BreakingNews/BreakingNewsSlider";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSidenav/LeftSideNav";
import Navvar from "../Shared/Navvar/Navvar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";

const Home = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Header></Header>
            <BreakingNewsSlider></BreakingNewsSlider>
            <Navvar></Navvar>
            <div className="grid grid-cols-4 gap-5">

                <div ><LeftSideNav></LeftSideNav></div>

                <div className="col-span-2 border">news </div>

                <div><RightSideNav></RightSideNav></div>
            </div>
        </div>
    );
};

export default Home;