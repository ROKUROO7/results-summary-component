import { Component } from './components/Summary-component'
import { FetchData } from './hooks/fetchData'

function App() {
  const data = FetchData();
  
  const average = data.length > 0 ? Math.round(data.reduce((sum, item) => sum + item.score, 0)/ data.length) : 0

  return (
    <>
      <article className='w-full flex flex-col bg-white sm:w-fit rounded-3xl sm:flex-row'>
        <section className='w-full max-w-sm pbs-4 pbe-4 flex flex-col items-center gap-4 bg-linear-to-b from-[hsl(252,100%,67%)] to-[hsl(241,81%,54%)] rounded-3xl sm:justify-between sm:pbs-8 sm:pbe-8'>
          <h1 className=' text-[1.25rem] font-medium text-[hsl(241,100%,89%)]'>Your Result</h1>
          <p className='w-32 h-32 flex flex-col justify-center items-center rounded-[100%] bg-linear-to-b from-[hsla(256,72%,46%,1)] to-[hsla(241,72%,46%,0)]'>
            <span className=' text-[3rem] font-bold text-white'>{average}</span>
            <span className=' text-[1rem] text-[hsl(241,100%,89%)]'>of 100</span>
          </p>
          <p className='flex flex-col items-center sm:gap-8 ps-10 pe-10'>
            <span className='text-[1.5rem] font-medium text-white'>Great</span>
            <span className='text-[1rem] text-[hsl(241,100%,89%)] text-center'>You scored higer than 65% of the people who have taken these tests</span>
          </p>
        </section>

        <section className='w-full max-w-sm flex flex-col pbs-4 pbe-4 ps-6 pe-6 gap-6 sm:pbs-8 sm:pbe-8'>
          <h2 className=' text-[1rem] font-bold text-[hsl(224,30%,27%)] sm:text-[1.25rem]'>Summary</h2>
          <div className='flex flex-col gap-4'>
             {
                data.map((item) => (
                  <Component 
                    key={item.category}
                    icon={item.icon}
                    category={item.category}
                    score={item.score}
                    color={item.color}
                    bg={item.background}
                  />
                ))
             }
          </div>
          <button className='rounded-4xl pbs-2 pbe-2 text-[1.25rem] font-medium text-white bg-[hsl(224,30%,27%)] transition-colors duration-300 hover:cursor-pointer hover:bg-linear-to-b from-[hsla(256,72%,46%,1)] to-[hsla(241,72%,46%,1)] focus:bg-linear-to-b from-[hsla(256,72%,46%,1)] to-[hsla(241,72%,46%,1)]'>Continue</button>
        </section>
      </article>

    </>
  )
}

export default App
