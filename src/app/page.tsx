"use client";
import Image from "next/image";
import Location from "../../public/images/location.png";
import USA from "../../public/images/usa.svg";
import GEO from "../../public/images/geo.svg";
import building from "../../public/images/building-2.svg";
import mail from "../../public/images/mail.svg";
import BG from "../../public/images/background.svg";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 p-8 relative">
      <Image src={BG} alt="" className="absolute z-0 bottom-5"/>
      <div className="bg-green-50 p-[30px] rounded-[20px] shadow-lg w-full md:max-w-[470px] min-h-[652px] flex-grow h-[600px] z-10">
        <h2 className="text-black text-2xl font-medium leading-normal mb-4">
          Get In Touch!
        </h2>
        <p className="text-gray-600 mb-[30px]">Send us your message anytime</p>
        <form className="space-y-4 flex flex-col gap-4">
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-1/2 p-2 border border-black bg-transparent rounded-[10px]"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-1/2 p-2 border border-black bg-transparent rounded-[10px]"
            />
          </div>
          <div className="relative">
            <input
              className="flex items-center pl-10 border border-black bg-transparent p-2 rounded-[10px] w-full"
              placeholder="Your Email"
            />
            <div className="absolute left-3 top-2.5">
              <Image src={mail} alt="Mail Icon" width={20} height={20} />
            </div>
          </div>

          <div className="relative">
            <input
              className="flex items-center pl-10 border border-black bg-transparent p-2 rounded-[10px] w-full"
              placeholder="Your Company"
            />
            <div className="absolute left-3 top-2.5">
              <Image
                src={building}
                alt="Building Icon"
                width={20}
                height={20}
              />
            </div>
          </div>
          <textarea
            placeholder="Send Us A Message"
            className="w-full p-2 border border-black rounded-[10px] h-24 bg-transparent"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-green-600 text-white p-2 rounded-[50px] hover:bg-green-700"
          >
            Submit
          </button>
        </form>
        <p className="text-black text-center font-poppins text-base font-normal leading-normal mt-5">
          By sending us the message, you agree to our
          <br />
          <a href="#" className="text-black font-semibold">
            terms and conditions
          </a>
        </p>
      </div>

      <div className="bg-green-50 pt-5 pb-[28px] pr-[28px] pl-5 rounded-lg shadow-lg w-full md:w-3/5 h-[534px] self-end flex flex-col md:flex-row items-center md:items-start z-10">
        <div className="space-y-4 w-full md:w-1/2">
          <h2 className="text-xl font-bold mb-2 text-gray-800">Locations</h2>
          <p className="text-gray-600 mb-6">
            Contact with Us at These Locations
          </p>
          <div className="space-y-6 flex flex-col justify-between w-full">
            {" "}
            <div className="flex items-center space-x-3 border-b-[3px] border-customGreen rounded-[10px] p-[10px]">
              {" "}
              <Image src={USA} alt="" width={25} height={15} />
              <p className="text-gray-800 pb-1 text-sm">
                {" "}
                USA, San Francisco, Valencia St. 918
              </p>
            </div>
            <div className="flex items-center space-x-3 border-b-[3px] border-customGreen rounded-[10px] p-[10px]">
              <Image src={USA} alt="" width={25} height={15} />
              <p className="text-gray-800 pb-1 text-sm">
                USA, San Francisco, Valencia St. 918
              </p>
            </div>
            <div className="flex items-center space-x-3 border-b-[3px] border-customGreen rounded-[10px] p-[10px]">
              <Image src={GEO} alt="" width={25} height={15} />
              <p className="text-gray-800 pb-1 text-sm">
                Georgia, Chavchavadze St. 12
              </p>
            </div>
            <div className="flex items-center space-x-3 border-b-[3px] border-customGreen rounded-[10px] p-[10px]">
              <Image src={GEO} alt="" width={25} height={15} />
              <p className="text-gray-800 pb-1 text-sm">
                Georgia, Chavchavadze St. 12
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 md:mt-0 md:ml-8 w-[365px] h-[300px]">
          <Image
            src={Location}
            alt="Location Map"
            width={365}
            height={300}
            className="w-[365px] h-[486px]"
          />
        </div>
      </div>
    </div>
  );
}
