import Admin from "../admin/Admin";
import screenshot from "../assests/astral-midnight.png";
import extension from "../assests/extension.png";

const App: React.FC = () => {
  return (
    <div className="w-full  flex flex-col items-center pt-10">
      <h1 className="font-semibold text-[#ffcc66] sm:text-5xl text-2xl my-5">
        Astral Midnight
      </h1>
      <p className="font-semibold text-sm text-center sm:text-lg my-5 text-gray-500 ">
        A sleek and sophisticated vs-code color-theme that brings a professional
        and modern look to your coding environment.
      </p>

      <img
        src={screenshot}
        alt="screenshot"
        className="md:w-[70%] w-[90%] rounded-lg shadow-2xl mt-10 sm:mt-20"
      />
      <div className="my-20 flex flex-col items-center ">
        <h1 className="text-gray-50 text-2xl  mb-10 ">Color Pallet</h1>
        <div className=" flex w-full justify-center items-center gap-7 lg:gap-10 flex-wrap">
          <div className="flex flex-col justify-center items-center">
            <div
              className={`rounded-full bg-[#141316]  lg:w-[70px] lg:h-[70px] h-[50px] w-[50px]`}
            ></div>
            <p className="text-gray-50">#141316</p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div
              className={`rounded-full bg-[#C7C7C7]  lg:w-[70px] lg:h-[70px] h-[50px] w-[50px]`}
            ></div>
            <p className="text-gray-50">#C7C7C7</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div
              className={`rounded-full bg-[#141316b2] lg:w-[70px] lg:h-[70px] h-[50px] w-[50px]`}
            ></div>
            <p className="text-gray-50">#141316b2</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div
              className={`rounded-full bg-[#309987] lg:w-[70px] lg:h-[70px] h-[50px] w-[50px]`}
            ></div>
            <p className="text-gray-50">#309987</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div
              className={`rounded-full bg-[#e2d59b]  lg:w-[70px] lg:h-[70px] h-[50px] w-[50px]`}
            ></div>
            <p className="text-gray-50">#e2d59b</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div
              className={`rounded-full bg-[#f07178]  lg:w-[70px] lg:h-[70px] h-[50px] w-[50px]`}
            ></div>
            <p className="text-gray-50">#f07178</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div
              className={`rounded-full bg-[#9fe0a2] lg:w-[70px] lg:h-[70px] h-[50px] w-[50px]`}
            ></div>
            <p className="text-gray-50">#9fe0a2</p>
          </div>
        </div>
      </div>
      <div className="my-5 w-full flex justify-center items-center flex-col mb-20">
        <h1 className="text-gray-50 text-xl my-3">Installation</h1>
        <p className="text-gray-400 sm:text-sm text-xs my-5 text-center">
          To install the Astral Midnight theme, open a command prompt or
          terminal window and enter the following command:
        </p>

        <h2 className="py-5 sm:px-3 px-1 rounded-md text-slate-800 bg-gray-400 font-bold sm:text-sm text-xs mt-3 mb-3 ">
          code --install-extension sumyataung.astral-midnight
        </h2>

        <h1 className="text-gray-400 sm:text-sm text-xs my-5"> OR </h1>
        <p className="text-gray-400 sm:text-sm text-xs my-5 text-center">
          Open VS-Code =&gt; Go to Extension Marketplace & type 'Astral
          Midnight' in search bar. There, you can install the extension & set
          color theme.
        </p>
        <img
          src={extension}
          alt="screenshot"
          className="rounded-lg my-5 shadow-xl sm:w-[400px] w-1/2"
        />
      </div>
      <Admin />
    </div>
  );
};

export default App;
