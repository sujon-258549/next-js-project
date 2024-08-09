import Link from "next/link"

export const  metadata = {
  title: "Cetagoris | Next hero Project",
  discription: "This is secure"
}


const getTodo = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json()
  return data
}

const page = async () => {

  const todosData = await getTodo()


  return (
    <>
      <div className="w-[90%] mx-auto mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {todosData.map(({ id, body, title }) => (
            <div key={id} className="p-4 border rounded-lg shadow">
              <h3 className="text-xl mb-5 font-bold">{title.slice(0,35)}</h3>
         
         <p>{body}</p>
            <Link href={`/category/${id}`} className="btn mt-5 btn-outline btn-secondary">View More</Link>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default page