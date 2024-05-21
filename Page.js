
import React,{Component} from "react";
export class Page extends Component{ 
  render() {
  return(
  <>
  <section className='mt-12' id="technologies">
            <div className='container m-auto px-4'>
              <h2 className='text-2xl font-semibold'>Technologies</h2>
              
            <div className='mt-14'>
            <div>
            <div className='flex justify-between items-center'> 
                <h2 className='font-semibold'>HTML</h2>
                <p className='text-gray-500 hover:text-cyan-500 '>Advanced</p>
                </div>
               <span className='w-full h-2 mt-2 bg-gradient-to-t  from-blue-700 to-cyan-700 block rounded-md'/>
            </div>
            <div className='mt-6'>
            <div className='flex justify-between items-center'> 
                <h2 className='font-semibold'>CSS & Bootstrap</h2>
                <p className='text-gray-500 hover:text-cyan-500 '>Advanced</p>
                </div>
               <span className='w-[75%] h-2 mt-2 bg-gradient-to-t  from-blue-700 to-cyan-700 block rounded-md'/>
            </div>
            <div className='mt-6'>
            <div className='flex justify-between items-center'> 
                <h2 className='font-semibold'>JavaScript</h2>
                <p className='text-gray-500 hover:text-cyan-500 '>Advanced</p>
                </div>
               <span className='w-[45%] h-2 mt-2 bg-gradient-to-t  from-blue-700 to-cyan-700 block rounded-md'/>
            </div>
            <div className='mt-6'>
            <div className='flex justify-between items-center'> 
                <h2 className='font-semibold'>Tailwind CSS v3.4</h2>
                <p className='text-gray-500 hover:text-cyan-500 '>Advanced</p>
                </div>
               <span className='w-[67%] h-2 mt-2 bg-gradient-to-t  from-blue-700 to-cyan-700 block rounded-md'/>
            </div>
            <div className='mt-6'>
            <div className='flex justify-between items-center'> 
                <h2 className='font-semibold'>UI design</h2>
                <p className='text-gray-500 hover:text-cyan-500 '>Advanced</p>
                </div>
               <span className='w-[85%] h-2 mt-2 bg-gradient-to-t  from-blue-700 to-cyan-700 block rounded-md'/>
            </div>
            <div className='mt-6'>
            <div className='flex justify-between items-center'> 
                <h2 className='font-semibold'>React</h2>
                <p className='text-gray-500 hover:text-cyan-500 '>Advanced</p>
                </div>
               <span className='w-[40%] h-2 mt-2 bg-gradient-to-t  from-blue-700 to-cyan-700 block rounded-md'/>
            </div>
     
            </div>
            </div>
          </section>
        
  </>
  );
}
}