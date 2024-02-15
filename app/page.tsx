
export default function Home() {
  return (
    <main className='flex flex-col min-h-screen p-8 justify-center items-center bg-neutral-Light-Gray overflow-hidden'>
    <div className='grid bg-white rounded-t-lg sm:w-[38.5rem] shadow-2xl'>
      <article className='p-9 flex flex-col flex-wrap'>
        <h1 className='  justify-start text-cyan-600 items-start font-semibold text-2xl'>Join our community</h1>
        <h2 className='text-[#767601] text-em font-semibold text-lg pt-[1rem] leading-7'>30-day hassle-free money back guarantee</h2>
        <p className=' text-gray-500 pt-3 text-base font-karla sm:max-w-[34.56rem] leading-6 pb-1'>Gain access to our full library of tutorials along with expert code reviews. Perfect for any developers who are serious about honing their skills.</p>
      </article>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 sm:w-[38.5rem] rounded-b-lg  shadow-2xl">
        <section className='flex flex-col sm:items-start sm:justify-start bg-[#018576] sm:rounded-bl-lg pt-10 pl-9 pr-7 pb-2'>
          <h3 className='flex-wrap font-karla text-[#ffffff] font-medium'>Monthly Subscription</h3>
          <div className="flex flex-row gap-2">
          <h4 className='text-3xl pt-4 font-semibold text-white'>$29
          </h4>
          <p className='text-[#ffff] text-xs items-center pt-[1.7rem]'>per month</p>
          </div>
          <p className='pt-1 font-karla text-white text-[0.99rem]'>Full access for less than $1 a day</p>
         
        <a href='/' className='mt-6 bg-lime-700 w-full py-3 rounded-md shadow-xl text-center hover:bg-[#525c09] text-base text-white cursor-pointer mb-4 sm:mb-4'>Sign up</a>        
        </section>
      <section className='flex flex-col pt-10 pl-9 pb-4 pr-8 justify-start bg-[#008564] rounded-b-lg sm:rounded-b-none sm:rounded-br-lg'>
        <h5 className='text-white font-medium font-karla'>
        Why us
        </h5>
        <p className='text-white font-karla pt-4 sm:max-w-[13.76rem] text-[0.99rem] mb-2 sm:mb-2'>Tutorials by industry experts Peer & expert code review Coding exercises Access to our GitHub repos Community forum Flashcard decks New videos every week</p>
      </section>
    </div>
  </main>  
  );
}
