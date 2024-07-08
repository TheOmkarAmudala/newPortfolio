import React from "react";
import project from "./projecttwitter.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import photo from "./photo.png"

function Page3() {
    const data = [
        { img: project },
        { img: project },
        { img: project },

    ];

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2 ,
        slidesToScroll: 1,
        className: "space-x-16 p-4 scrollbar-hide  "
    };

    return (
        <div className="h-[90vh] mt-[3%] overflow-hidden">
            <div className="text-orange-500 font-urbanist text-6xl ml-[10%] flex">
                <div>
                    Let's Have a look at <p className="text-gray-600">Projects</p>
                </div>
                <div className="text-2xl w-[100px] h-[40px] bg-orange-500 text-white border rounded-full ml-[50%]">
                    <p className="ml-3 mt-1">See all</p>
                </div>
            </div>
            <Slider {...settings}>
                {data.map((item, index) => (
                    <div key={index} className="w-[300px] border rounded-3xl mt-16 ">
                        <img src={item.img} alt={`Project ${index + 1}`} />

                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Page3;
