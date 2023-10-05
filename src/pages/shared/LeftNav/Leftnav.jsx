import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



const Leftnav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div>
            <h2 className="text-xl p-3">News Ctegories:{categories.length}</h2>
            <div>
                {
                    categories.map(category =>
                        <Link key={category.id} className="text-xl text-gray-600 flex flex-col items-start pl-4 py-2 mb-6 font-semibold "
                            to={`/category/${category.id}`}>
                            {category.name}
                        </Link>)
                }

            </div>

        </div>
    );
};

export default Leftnav;