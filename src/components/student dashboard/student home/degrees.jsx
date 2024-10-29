import { StudentProgress } from "@/components/Circular Progress/Student-progress";


export default function Degrees() {
  return (
    <div dir='rtl' className='w-full h-fit bg-white rounded-[15px] p-[15px]' >
        <div className="flex justify-between items-end pl-[15px]">
          <p className='text-[24px] font-semibold'>علامات</p>
          <div className="text-[#7E7F80]">
            مذاكرة أولى
            <span className="absolute rotate-90">&lt;</span>
          </div>
        </div>
        <div className='flex justify-center pt-[10px] pb-[15px]'>
          <div className='h-[1px] w-[95%] bg-[#BDBEBF]'/>
        </div>

        <div className='w-full flex flex-col gap-[10px]'>
          <div className='flex'> 
            <div className='flex gap-[5px]'>
              <div className='size-[28px] bg-slate-400'></div>
              <p className='text-[16px]'>رياضيات 560/<span className='text-[#7E7F80]'>600</span></p>
            </div>
            <div className='mr-[10px]'>
              <StudentProgress/>
            </div>
            <div className='h-[28px] w-[2px] bg-[#BDBEBF] mr-[10px] ml-[25px]'/>
            <p className='text-[#7E7F80]'>13/3/2025</p>
          </div>

          <div className='flex'> 
            <div className='flex gap-[5px]'>
              <div className='size-[28px] bg-slate-400'></div>
              <p className='text-[16px]'>رياضيات 560/<span className='text-[#7E7F80]'>600</span></p>
            </div>
            <div className='mr-[10px]'>
              <StudentProgress/>
            </div>
            <div className='h-[28px] w-[2px] bg-[#BDBEBF] mr-[10px] ml-[25px]'/>
            <p className='text-[#7E7F80]'>13/3/2025</p>
          </div>

          <div className='flex'> 
            <div className='flex gap-[5px]'>
              <div className='size-[28px] bg-slate-400'></div>
              <p className='text-[16px]'>رياضيات 560/<span className='text-[#7E7F80]'>600</span></p>
            </div>
            <div className='mr-[10px]'>
              <StudentProgress/>
            </div>
            <div className='h-[28px] w-[2px] bg-[#BDBEBF] mr-[10px] ml-[25px]'/>
            <p className='text-[#7E7F80]'>13/3/2025</p>
          </div>  
            
        </div>

      </div>
  )
}
