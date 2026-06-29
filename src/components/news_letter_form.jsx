export default function NewsLetterForm() {
  return (
    <>
      {/* main content */}
      <section className="w-full bg-[#7B1FFF] py-16 px-6 md:px-10">
        <div className="max-w-5xl mx-auto text-white">
          {/* Heading */}
          <div className="text-center">
            <h2 className="text-4xl font-bold">Newsletter</h2>
            <p className="mt-4 text-lg text-white/90">
              Sign up to receive updates on new arrivals and special offers
            </p>
          </div>

          {/* Form */}
          <form className="mt-12">
            <label className="block text-lg mb-4">
              Email <span>*</span>
            </label>

            <div className="flex flex-col lg:flex-row gap-6">
              <input
                type="email"
                placeholder=""
                className="
                      flex-1
                      h-14
                      rounded-full
                      border border-white
                      bg-transparent
                      px-6
                      outline-none
                      text-white
                      placeholder:text-white/60
                      py-3.5
                    "
              />

              <button
                type="submit"
                className="
                      h-14
                      px-12
                      rounded-full
                      bg-black
                      text-white
                      text-lg
                      hover:bg-transparent
                      border-black
                      border
                      transition
                    "
              >
                Subscribe
              </button>
            </div>

            {/* Checkbox */}
            <label className="mt-8 flex items-center gap-4 cursor-pointer">
              <input
                type="checkbox"
                className="
                      h-5
                      w-5
                      border
                      border-white
                      bg-transparent
                      accent-white
                    "
              />
              <span className="text-xl">
                Yes, subscribe me to your newsletter. *
              </span>
            </label>
          </form>
        </div>
      </section>
    </>
  );
}
