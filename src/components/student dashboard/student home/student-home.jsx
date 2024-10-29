import Notes from './notes'
import Degrees from './degrees'
import StudentNav from '@/components/studentNav'


export default function StudentHome() {
  return (
    <>
    <div className='h-full flex flex-col items-center pt-[60px]'>
      <div className='flex flex-col gap-[20px]'>
      <Notes/>
      <Degrees/>

      </div>
      <StudentNav/>
    </div>
    </>
  )
}
