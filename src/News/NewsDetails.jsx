import Header from "../pages/Shared/Header/Header";
import Navvar from "../pages/Shared/Navvar/Navvar";

const NewsDetails = () => {
    return (
        <div>
            <Header></Header>
            <Navvar></Navvar>
            <div className="grid md:grid-cols-4 grid-cols-1">
                <div className="col-span-3">
                    <h1>Details</h1>
                </div>
                <div>
                    <h1>Show</h1>
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;