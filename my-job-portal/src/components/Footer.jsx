import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>

    <footer className="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
      <span className="block text-center md:inline-block md:text-left text-gray-500 sm:text-center dark:text-gray-400 md:ml-auto">
        © 2023 <a href="https://flowbite.com/" className="hover:underline">Hacktiv8™</a>
      </span>
    </footer>
    
        </>
    )
}

export default Footer