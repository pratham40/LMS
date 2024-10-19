import { useNavigate } from 'react-router-dom'

export default function CourseCard({data}) {
    const navigate=useNavigate()

  return (
    <div 
    onClick={()=>navigate(`/courses/${data?._id}`,
    {state:{...data}}
    )}
     className='text-white w-auto h-auto shadow-xl rounded-lg cursor-pointer  group overflow-hidden bg-zinc-700'>
        <div className='overflow-hidden'>
            <img className='h-48 w-full rounded-tl-xl rounded-tr-xl group-hover:scale=[1,2] transition-all ease-in-out' src={data?.thumbnail?.secure_url} alt="course-thumbnail" />
        </div>
        <div className='p-3 space-y-1 text-white '>
            <h2 className='text-xl font-bold text-yellow-500 line-clamp-2 hover:text-yellow-600'>
                {data?.title}
            </h2>
            <p className='line-clamp-2'>
                {data?.description}
            </p>
            <p className='font-semibold'>
                <span className='text-yellow-500 font-bold'>
                    Category : {' '}
                </span>
                {data?.category}
            </p>
            <p className='font-semibold'>
                <span className='text-yellow-500 font-bold'>
                    Total Lectures :  {' '}
                </span>
                {data?.numbersOfLectures}
            </p>
            <p className='font-semibold'>
                <span className='text-yellow-500 font-bold'>
                    Instructor :  {' '}
                </span>
                {data?.createdBy}
            </p>
        </div>
    </div>
  )
}
