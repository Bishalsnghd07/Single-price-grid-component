
export default function Home() {
  return (
    <main className="min-h-screen justify-center items-center flex flex-col overflow-hidden bg-neutral-Light-Gray p-6">
        <div className="grid sm:w-[38.5rem] shadow-lg">
      <article className="pt-9 pl-8 pr-8 pb-6 bg-white rounded-t-lg">
        <h1 className="text-cyan-600 text-2xl font-semibold">Join our community</h1>
        <h2 className="text-base text-[#767601] font-semibold pt-[1.5rem]">30-day, hassle-free money back guarantee</h2>
        <p className="pt-3 text-gray-500 font-karla text-base leading-6 pb-4">Gain access to our full library of tutorials along with expert code reviews. Perfect for any developers who are serious about honing their skills.</p>
      </article>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 w-full sm:w-[38.5rem] rounded-b-lg">
      <section className="flex flex-col bg-[#018576] pt-9 pl-9 pr-7 pb-9 sm:rounded-bl-lg">
        <h3 className="text-white font-semibold text-lg">Monthly Subscription</h3>
        <div className="flex flex-row pt-3 gap-3">
            <h4 className="text-white font-semibold text-3xl">$29</h4>
            <p className="text-white pt-[0.36rem]">per month</p>
        </div>
        <p className="text-white text-base pt-2">Full access for less than $1 a day</p>
        <a href="/" className="mt-6 w-full bg-lime-700 hover:bg-[#525c09] py-3 text-center text-white font-semibold rounded-lg shadow-lg">Sign up</a>
      </section>

      <section className="bg-[#008564] pt-9 pl-8 pr-8 pb-6 rounded-b-lg sm:rounded-b-none sm:rounded-br-lg">
        <h5 className="text-white font-semibold text-lg">Why us</h5>
        <p className="text-white text-[0.94rem] text-left font-karla pt-4 sm:max-w-[12.6rem]">Tutorials by industry experts Peer & expert code review Coding exercises Access to our GitHub repos Community forum Flashcard decks New videos every week</p>
      </section>
        </div>
    </main>
  );
}