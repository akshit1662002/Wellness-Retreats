import React from "react"
import  ReactDOM  from "react-dom/client"
import Header from "./src/components/Header"
import Body from "./src/components/Body"
import Footer from "./src/components/Footer"

import useOnlineStatus from "./src/utils/useOnlineStatus"


const AppLayout = () => {

    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false ) return <h1 className="font-bold text-x"> check your internet connection </h1>;
    return(
        <div>
            <Header/> 
            <Body /> 
            <Footer />
        </div>
        
    
    )


}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);
