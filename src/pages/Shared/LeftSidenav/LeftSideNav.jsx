import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import image1 from '../../../assets/1.png'
import image2 from '../../../assets/2.png'
import image3 from '../../../assets/3.png'
import moment from 'moment';
import { AiFillCalendar } from 'react-icons/ai';

const LeftSideNav = () => {

    let [data, setData] = useState([])
    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(value => setData(value))
    }, [])
    return (
        <div>
            <h2 className="mb-3 font-bold">All Caterogy</h2>

            <div>
                <button className="btn w-full mb-4">National News</button>
                <div className="flex flex-col gap-3 ml-7">
                    {
                        data.map(singleData => <NavLink to={`/caterogy/${singleData.id}`} key={singleData.id} className={'block font-semibold text-gray-500'}>{singleData.name}</NavLink>)
                    }
                </div>
            </div>

            <div className="mt-10">
                <div className="card card-compact  bg-base-100 ">
                    <figure><img src={image1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
                        <div className="flex justify-between">
                            <p>Sports</p>
                            <p className="flex gap-1 items-center"><AiFillCalendar></AiFillCalendar> {moment().format("MMM D YY")}</p>
                        </div>

                    </div>
                </div>


                <div className="card card-compact bg-base-100 ">
                    <figure><img src={image2} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
                        <div className="flex justify-between">
                            <p>Sports</p>
                            <p className="flex gap-1 items-center"><AiFillCalendar></AiFillCalendar> {moment().format("MMM D YY")}</p>
                        </div>

                    </div>
                </div>


                <div className="card card-compact bg-base-100 ">
                    <figure><img src={image3} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
                        <div className="flex justify-between">
                            <p>Sports</p>
                            <p className="flex gap-1 items-center"><AiFillCalendar></AiFillCalendar>{moment().format("MMM D YY")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeftSideNav;