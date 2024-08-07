import React from 'react';

const detaiPost = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json()
    return data;
}
const Id = async ({ params }) => {
    const { title, body } =await detaiPost(params.id)
    return (
        <div className='rounded-md w-96 mx-auto border  p-10 mt-10 text-center'>
            <h3 className="text-xl mb-5 font-bold">Title : {title}</h3>

            <p>Body :  {body}</p>
        </div>
    );
}

export default Id;
