import Mealse from '@/Component/Mealse';
import React from 'react';

const Page = () => {
    return (
        <div>
            <div className="dark:bg-gray-800">
                <div className="dark:bg-transparent my-20">
                    <div className="w-11/12 sm:w-2/3 mx-auto mt-10 lg:flex justify-center items-center flex-col mb-5 sm:mb-10">
                        <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl text-center text-gray-800 dark:text-white font-black leading-10">
                            Meals db
                            <span className="text-violet-800 dark:text-violet-500">Website</span>
                        </h1>
                        <p className="mt-5 sm:mt-10 lg:w-10/12 text-gray-600 dark:text-gray-300 font-normal text-center text-xl">
                            Meals the Best food order Website
                        </p>
                    </div>
                    <Mealse></Mealse>
                </div>
            </div>

        </div>
    );
}

export default Page;
