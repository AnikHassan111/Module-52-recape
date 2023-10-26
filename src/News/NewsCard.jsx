import { Link } from "react-router-dom";

const NewsCard = ({ data }) => {

    const {title,image_url,details,_id} = data

    return (
        <div className="card card-compact  bg-base-100 shadow-xl m-10">
            <figure><img src={image_url} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                {
                    details.length > 200?
                    <p> {details.slice(0,200)} <Link className="text-blue-700 ml-2 font-semibold" to={`/newsdetails/${_id}`}>Read More</Link> </p>
                    : details
                }
               
            </div>
        </div>
    );
};

export default NewsCard;