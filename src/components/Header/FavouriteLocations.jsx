import heart from '../../assets/heart.svg';

const FavouriteLocations = () => {
    return (
        <>
            <div className="p-2 hover:bg-black/30 cursor-pointer flex gap-2 items-center rounded-md transition-all">
                <img src={heart} alt="" />
                <span>Favourite Locations</span>
            </div>

            {/* Modal of Favourite Locations  */}
            <div className="max-w-xs py-4 bg-white rounded-md border-gray-500 absolute right-0 top-16 text-black shadow-lg ">
                <h3 className="text-lg font-bold px-4">Favourite Locations</h3>
                <ul className="space-y-2 mt-4 *:py-2 *:px-4 *:cursor-pointer">
                    <li className="hover:bg-gray-200">Dhaka</li>
                    <li className="hover:bg-gray-200">Rangpur</li>
                    <li className="hover:bg-gray-200">Europe</li>
                </ul>
            </div>
        </>
    );
};

export default FavouriteLocations;