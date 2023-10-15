import Marquee from "react-fast-marquee";


const BreakingNewsSlider = () => {
    return (
        <div className="flex my-6">
            <button className="btn text-white btn-accent">Breaking News</button>
            <Marquee>
               <p> I can be a React component, multiple React components, or just some text...</p>
                <p className="px-10">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente tempore veritatis dicta quas nobis sint, assumenda corporis deleniti illum aut...</p>
                <p>I can be a React component, multiple React components, or just some text...</p>
            </Marquee>

        </div>
    );
};

export default BreakingNewsSlider;