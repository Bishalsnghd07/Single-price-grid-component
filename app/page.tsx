
export default function Home() {
  return (
    <main className='flex flex-col min-h-screen p-8 justify-center items-center bg-neutral-Light-Gray overflow-hidden'>
    <div className='grid bg-white rounded-t-lg sm:w-[38.5rem] shadow-2xl'>
      <article className='p-9 pt-12 flex flex-col flex-wrap'>
        <h1 className=' text-primary-cyan justify-start items-start font-semibold text-2xl'>Join our community</h1>
        <h2 className=' text-primary-Bright-Yellow font-semibold text-lg pt-[1rem]'>30-day hassle-free money back guarantee</h2>
        <p className=' text-neutral-Grayish-Blue pt-3 text-base font-karla sm:max-w-[34.56rem] pb-2'>Gain access to our full library of tutorials along with expert code reviews. Perfect for any developers who are serious about honing their skills.</p>
      </article>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 sm:w-[38.5rem] rounded-b-lg  shadow-2xl">
        <section className='flex flex-col sm:items-start sm:justify-start bg-primary-cyan sm:rounded-bl-lg p-9'>
          <h3 className='flex-wrap font-karla text-neutral-Light-Gray font-medium w-full'>Monthly Subscription</h3>
          <h4 className='flex flex-row text-3xl pt-4 font-semibold text-white gap-4'>$29
          <p className='text-gray-300 text-xs items-center pt-[0.66rem]'>per month</p>
          </h4>
          <p className='pt-2 font-karla text-neutral-Light-Gray text-[0.99rem]'>Full access for less than $1 a day</p>
         
        <a href='/' className='mt-8 bg-primary-Bright-Yellow w-full py-3 rounded-md shadow-xl text-center hover:bg-[#cdee12] text-base text-white cursor-pointer'>Sign up</a>        
        </section>
      <section className='flex flex-col p-9 justify-start bg-[#41bbb9] rounded-b-lg sm:rounded-b-none sm:rounded-br-lg'>
        <h5 className='text-neutral-Light-Gray font-medium font-karla'>
        Why us
        </h5>
        <p className='text-slate-300 font-karla pt-3 sm:max-w-[12.46rem] text-[0.99rem]'>Tutorials by industry experts Peer & expert code review Coding exercises Access to our GitHub repos Community forum Flashcard decks New videos every week</p>
      </section>
    </div>
  </main>  
  );
}
