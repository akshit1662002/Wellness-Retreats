

const MeditationCard = (props) => {
    const { resData } = props;

    const {
        image,
        title,
        description,
        date, 
        location,
        price,
        type,
        
    } = resData ;
    const updatedate = new Date(date * 1000);

    // Extract the date parts
    const day = updatedate.getDate();
    const month = updatedate.toLocaleString('en-US', { month: 'long' });
    const year = updatedate.getFullYear();

    // Format the date string
    const formattedDate = `Date: ${month} ${day}, ${year}`;

    return (
        <div className="bg-customColor2 p-6 rounded-lg shadow-md" >
             <img 
           className="w-6/12 h-40 rounded-md mb-4"
           alt="res-logo"
           src= {image}/>
            <h2 className="text-2xl font-bold mb-2">{title} </h2>
            <p className="text-gray-700 mb-2"> {description}  </p>
            <p className="text-gray-700 mb-2"> { formattedDate}  </p>
            <p className="text-gray-700 mb-2"> { location}  </p>
            <p className="text-gray-700"> ${ price}  </p>
            
            
            
        </div>
    );
};

export default MeditationCard ;
