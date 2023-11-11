import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Replace the URL with your API endpoint
    async function fetchingData() {
      try {
        const response = await axios.get('https://phase2-aio.vercel.app/apis/pub/career-portal/jobs?q=Va&limit=8&page=1&sort=ASC');
        console.log(response);
        setData(response.data.data.query);
        console.log(response.data.data.query);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchingData();
  }, []);

  const navigate = useNavigate()

  const handleClick = (id) => {
    navigate(`/${id}`)
  }

  return (
    <div className="bg-gray-200 p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data?.map(data => (
          <div key={data.id} className="max-w-sm rounded overflow-hidden shadow-lg bg-white mb-4">
            <img className="w-full" src={data.imgUrl} alt="Company Image" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{data.title}</div>
              <p className="text-gray-700 text-base">{data.description}</p>
              <p className="text-gray-600 text-sm">{data.jobType}</p>
              <span key={data.id}>
                <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleClick(data.id)}>Details</button>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
