import { FaSkype } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="container my-24 mx-auto md:px-6">
      <section className="mb-32">
        <div className="relative h-[400px] overflow-hidden bg-cover bg-[50%] bg-no-repeat bg-[url('/images/hero-slide-01.webp')]"></div>
        <div className="container px-6 md:px-12">
          <div className="block rounded-lg px-6 py-12  bg-[#fe598dc4] shadow-[#fe598dbb] md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px]">
            <div className="mb-12 grid gap-x-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="mx-auto mb-12 text-center lg:mb-0 flex items-center flex-col gap-6">
                <FaSkype className="w-8 h-8 text-[#fff]" />
                <h6 className="font-medium text-[#fff] ">Unites States</h6>
              </div>
              <div className="mx-auto mb-12 text-center lg:mb-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  className="mx-auto mb-6 h-8 w-8 text-[#fff] "
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                <h6 className="font-medium text-[#fff]">
                  8240 Exchange Drive - Suite G4 Orlando - FL 32809
                </h6>
              </div>
              <div className="mx-auto mb-6 text-center md:mb-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  className="mx-auto mb-6 h-8 w-8 text-[#fff] "
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
                <h6 className="font-medium text-[#fff]">(407) 409-4516</h6>
              </div>
              <div className="mx-auto text-center">
                <svg
                  data-name="1-Email"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  stroke-width="2"
                  stroke="currentColor"
                  className="mx-auto mb-6 h-8 w-8 text-[#fff]"
                >
                  <path d="M29 4H3a3 3 0 0 0-3 3v18a3 3 0 0 0 3 3h26a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-.72 2L16 14.77 3.72 6zM30 25a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.23l13.42 9.58a1 1 0 0 0 1.16 0L30 7.23z" />
                </svg>
                <h6 className="font-medium text-[#fff]">
                  info@ezclickstay.com
                </h6>
              </div>
            </div>
            <div className="mx-auto max-w-[700px]">
              <form>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <label
                    className=" z-20  pointer-events-none mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-[#fff] "
                    for=""
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    className="peer contact-inp block min-h-[auto] w-full rounded  bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none text-[#fff] font-[14px] "
                    id=""
                    placeholder="Name"
                  />
                </div>

                <div className="relative mb-6" data-te-input-wrapper-init>
                  <label
                    className="pointer-events-none   mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-[#fff] "
                    for="exampleInput91"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    className="peer contact-inp block min-h-[auto] w-full rounded  bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none text-[#fff] "
                    id=""
                    placeholder="Enter your email address"
                  />
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <label
                    className="pointer-events-none   mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-[#fff] "
                    for="exampleInput91"
                  >
                    Subject
                  </label>
                  <input
                    type="email"
                    className="peer  contact-inp block min-h-[auto] w-full rounded  bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none text-[#fff] "
                    id=""
                    placeholder="Type the subject"
                  />
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <label
                    for="exampleFormControlTextarea1"
                    className="pointer-events-none   mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-[#fff] "
                  >
                    Message
                  </label>
                  <textarea
                    className="peer contact-inp block min-h-[auto] w-full rounded border-1 border-[#fff] bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none ext-[#fff] "
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Type your message"
                  ></textarea>
                </div>

                <button
                  type="button"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  className="inline-block w-full rounded bg-[#fff] px-6 pt-2.5 pb-2 text-xs font-medium text-[#fff] uppercase leading-normal text-black transition duration-150 ease-in-out hover:bg-primary-600  focus:bg-primary-600  focus:outline-none focus:ring-0 active:bg-primary-700  lg:mb-0"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
