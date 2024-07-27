const Card = ({ image, alt }) => {
    return (
        <div  className="max-w-xs mx-auto mb-4 relative overflow-hidden transform transition duration-300 hover:scale-105">
            <div className="flex items-center justify-center w-full h-48 rounded-lg overflow-hidden shadow-lg bg-white">
                <img className="w-full h-full object-cover" src={image} alt={alt} />
            </div>
        </div>
    );
}

export default Card;
