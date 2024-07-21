import sampleImage from './Assets/fbfb.jpeg';

function Aboutme(){

    return(    
        
        <div id="Aboutme"className="flex items-center justify-center h-screen bg-gray-200">
        <div className="max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={sampleImage} alt="Sample" className="w-full h-auto" />
            <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 flex justify-center" >Hello Im&nbsp;<b>Joemarie Jacinto</b></h2>
                <p className="mt-2 text-gray-600" >I Just Recently Graduated From Pambayang Dalubhasaan ng Marilao.</p>
                <p className="mt-2 text-gray-600 flex justify-center" >Im Looking for a Work to Show case my Skills and Talent</p>
            </div>
        </div>
    </div>





);






}

export default Aboutme
