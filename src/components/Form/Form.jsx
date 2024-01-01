import React from "react"

const Form = () => {
  return (
    <div className="w-full h-screen p-3 flex items-center bg-green-100 justify-center">
      <div className="max-w-sm w-full space-y-4">
        <div className="w-full">
          <h1 className="font-bold text-lg">Login</h1>
        </div>
        <div className="p-3 w-full shadow-xl shadow-black/15 rounded-lg bg-white space-y-2">
          <div className="text-gray-500 text-xs">Email Address</div>
          <div className="w-full flex gap-1 items-center pl-2">
            <img
              src="https://www.svgrepo.com/show/311600/email-unread.svg"
              alt="svgIcon"
              className="w-3 opacity-75"
            />
            <input type="text" className="w-full outline-none text-xs" />
          </div>
        </div>
        <div className="p-3 w-full shadow-xl shadow-black/10 rounded-lg bg-white space-y-2">
          <div className="text-gray-500 text-xs">Password</div>
          <div className="w-full flex gap-1 items-center pl-2">
            <img
              src="https://www.svgrepo.com/show/311612/padlock-locked.svg"
              alt="svgIcon"
              className="w-3 opacity-75"
            />
            <input type="password" className="w-full outline-none text-xs" />
            <img
              src="https://www.svgrepo.com/show/508054/eye-off.svg"
              alt="svgIcon"
              className="w-3 opacity-75 cursor-pointer"
            />
          </div>
        </div>
        <div className="w-full flex justify-between items-center">
          <div className="flex gap-1 items-center">
            <div className="w-6 rounded-full relative bg-white h-3 shadow-xl shadow-black/10">
              <button
                className="w-3 h-full absolute right-0 
              rounded-full bg-green-600 top-0"
              ></button>
            </div>
            <div className="text-xs">Remember me</div>
          </div>
          <div className="text-xs underline">
            <a href="#">Forgot Password?</a>
          </div>
        </div>
        <div className="w-full">
          <button
            className="w-full bg-green-600 rounded-lg p-3 text-white text-sm flex
           items-center gap-2 justify-center"
          >
            <span>Login</span>
            <img
              src="https://www.svgrepo.com/show/499619/login.svg"
              alt="svgIcon"
              className="w-4 opacity-75 cursor-pointer"
            />
          </button>
        </div>
      </div>
    </div>
  )
}
export default Form
