import { LOGO_URL } from "../utils/constant";

const Header = () => {
    return(
    <div>
        <div className=" p-4 bg-customColor  shadow-md mb-6 header-margin-bottom ">
        <h1 className="text-xl text-white font-bold">Wellness Retreats</h1>
        </div>
        <div className=" content-display side-gap relative bg-customColor2  m-2 pl-6 pr-6 pt-5 pb-5 rounded-md">
            <div>
            <img  className=" w-full h-64   object-cover rounded-xl" src={LOGO_URL} alt="Discover Your Inner Peace"  />
            </div>
            <div>
            <h2 className="text-xl m font-normal my-2 mt-7">Discover Your Inner Peace</h2>
            <p className="text-left mb-6">Join us for a series of wellness retreats designed to help you find tranquility and rejuvenation.</p>
            </div>

        </div>
       
        
    </div>
    )

} 

export default Header ;