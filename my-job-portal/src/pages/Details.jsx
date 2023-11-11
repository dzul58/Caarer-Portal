import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";  // Use useParams to get the job id from the URL
import axios from 'axios';

const Details = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();  // Get the job id from the URL

  useEffect(() => {
    // Replace the URL with your API endpoint
    async function fetchingData() {
      try {
        const response = await axios.get(`https://phase2-aio.vercel.app/apis/pub/career-portal/jobs/${id}`);
        console.log(response);
        setData(response.data.data);
        console.log(response.data.data.Company.name, "><>>>> ceek");
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchingData();
  }, [id]);  // Include id in the dependency array to re-run the effect when the id changes

  return (
    <>
        <div key={data} className="container mx-auto p-8">
          <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-md overflow-hidden">
            {/* Job Image */}
            <img className="w-full h-64 object-cover" src={data.imgUrl} alt="Job Image" />
    
            {/* Company Logo and Info */}
            <div className="flex items-center p-4">
              <img className="w-12 h-12 object-contain mr-4" src={data.Company?.companyLogo} alt="Company Logo" />
              <div>
                <h2 className="text-xl font-bold">{data.Company?.name}</h2>
                <p className="text-gray-600">{data.Company?.location}</p>
                <p className="text-gray-600">{data.Company?.email}</p>
              </div>
            </div>
    
            {/* Job Title and Description */}
            <div className="p-4">
              <h1 className="text-2xl font-bold mb-2">{data.title}</h1>
              <p className="text-gray-700">{data.description}</p>
            </div>
          </div>
        </div>
    </>
  );
}

export default Details;
