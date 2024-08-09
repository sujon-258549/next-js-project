"use client"
// secrch data
import Link from "next/link";
import { useEffect, useState } from "react";

const Meals = () => {
    const [search, setSearch] = useState('');
    const [error, setError] = useState('');
    const [meals, setMeals] = useState([]);

    const handleSearch = (e) => {
        e.preventDefault();
        const inputData = e.target.searchdata.value;
        setSearch(inputData);
    }

    const searchData = async () => {
        try {
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
            const data = await res.json();
            if (data.meals) {
                setMeals(data.meals);
                setError('');
            }
            else {
                setMeals([]);
                setError('No data found');
            }


        } catch (error) {
            setError('No data fetching');
        }
    }

    useEffect(() => {
        searchData();
    }, [search]);


    return (
        <div>
            <form onSubmit={handleSearch}>
                <div className="mx-auto flex flex-col items-center">
                    <div className="flex w-11/12 md:w-8/12 xl:w-6/12">
                        <div className="flex rounded-md w-full">
                            <input
                                type="text"
                                name="searchdata"
                                className="w-full p-3 rounded-md rounded-r-none border-2 border-gray-300 placeholder-current dark:bg-gray-500 dark:text-gray-300 dark:border-none"
                                placeholder="Meals DB Search..."
                            />
                            <button className="inline-flex items-center gap-2 bg-violet-700 text-white text-lg font-semibold py-3 px-6 rounded-r-md">
                                <span>Search</span>
                                <svg
                                    className="text-gray-200 h-5 w-5 p-0 fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    version="1.1"
                                    x="0px"
                                    y="0px"
                                    viewBox="0 0 56.966 56.966"
                                    style={{ enableBackground: "new 0 0 56.966 56.966" }}
                                    xmlSpace="preserve"
                                >
                                    <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </form>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-[90%] mx-auto my-10">
                {!error && meals?.map((mealsdata, index) => (
                    <div key={index} className="border p-5 shadow-2xl rounded-md">
                        <h1 className="text-xl font-semibold mb-2">{mealsdata.strMeal}</h1>
                        <p>{mealsdata.strInstructions.slice(0, 150)}...</p>
                    </div>
                ))}
                {error && (
                    <div className="fixed z-10 inset-0 overflow-y-auto" id="my-modal">
                        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                                <div className="absolute inset-0 bg-gray-500 opacity-75" />
                            </div>
                            <span
                                className="hidden sm:inline-block sm:align-middle sm:h-screen"
                                aria-hidden="true"
                            >

                            </span>
                            <div
                                className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                                role="dialog"
                                aria-modal="true"
                                aria-labelledby="modal-headline"
                            >
                                <div>
                                    <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100">
                                        <svg
                                            className="h-6 w-6 text-red-600"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </div>
                                    <div className="mt-3 text-center sm:mt-5">
                                        <h3
                                            className="text-lg leading-6 font-medium text-gray-900"
                                            id="modal-headline"
                                        >
                                            Error
                                        </h3>
                                        <div className="mt-2">
                                            <p className="text-sm text-gray-500">
                                                There was an error processing your request.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-5 sm:mt-6">
                                    <Link href={'/'}
                                        className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:text-sm"
                                       
                                    >
                                        OK
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Meals;
