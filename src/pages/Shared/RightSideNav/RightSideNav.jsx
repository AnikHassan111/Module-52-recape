import { FaFacebook, FaGithub, FaGoogle, FaInstagram } from "react-icons/fa6";
import image1 from '../../../assets/qZone1.png'
import image2 from '../../../assets/qZone2.png'
import image3 from '../../../assets/qZone3.png'

const RightSideNav = () => {
    return (
        <div>
            <div className="p-3">
                <h2 className="font-bold text-2xl">Login With</h2>
                <button className="btn btn-outline btn-info w-full my-3"><FaGoogle></FaGoogle> Login With Google</button>
                <button className="btn btn-outline w-full"><FaGithub></FaGithub> Login With Github</button>
            </div>
            <div className="p-3 my-5">
                <h2 className="font-bold text-2xl mb-4">Find Us</h2>
                <div className="flex items-center gap-2 border p-2 rounded-t-lg">
                  <FaFacebook></FaFacebook>  FaceBook
                </div>
                <div className="flex items-center gap-2 border-l border-r p-2">
                  <FaGithub></FaGithub> Github
                </div>
                <div className="flex items-center gap-2 border p-2 rounded-b-lg">
                  <FaInstagram></FaInstagram>  Instagram
                </div>
            </div>
            <div className="p-3 bg-gray-200 rounded-lg">
                <h2 className="font-bold text-2xl mb-4">Q Zone</h2>
                <img src={image1} alt="" />
                <img src={image2} alt="" />
                <img src={image3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;