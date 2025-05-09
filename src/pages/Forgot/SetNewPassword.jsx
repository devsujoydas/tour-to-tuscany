import { Helmet } from "react-helmet-async"
import { BsArrowLeft } from "react-icons/bs"
import { Link } from "react-router-dom"

const SetNewPassword = () => {
    const hangleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div style={{ backgroundImage: `url(https://i.ibb.co.com/7S1bjwg/hero.png)` }} className="bg-cover bg-center font-baloo-2 ">
            <Helmet> <title>TOURS TO TUSCANY | SET NEW PASSWORD</title> </Helmet>

            <div className="max-w-screen-2xl lg:mx-auto min-h-[100vh] flex justify-center items-center">
                <div className="bg-white p-10 rounded-2xl min-w-96 ">

                    <form onSubmit={hangleSubmit}>
                        <div className='flex justify-center items-center mb-5'>
                            <img className='bg-orange-200 px-4 py-5 rounded-full' src="https://i.ibb.co.com/0GQXtL3/forgotkey.png" alt="" />
                        </div>
                        <h1 className="text-4xl text-center font-bold mb-3">Set New Password</h1>
                        <h1 className="text-center mb-5">Your new password must be different from <br /> previously used passwords.</h1>

                        <div className="flex flex-col gap-1 text-gray-500 ">
                            <label htmlFor="" className="text-xl font-medium">Password</label>
                            <input type="email" placeholder="Enter your password" className="px-4 py-3 rounded-md border-2" />
                        </div>
                        <div className="flex flex-col gap-1 text-gray-500 ">
                            <label htmlFor="" className="text-xl font-medium">Confirm Password</label>
                            <input type="email" placeholder="Enter your confirm password" className="px-4 py-3 rounded-md border-2" />
                        </div>

                        <div className="text-center">
                            <Link to={"/passwordreset"}>
                                <input type="submit" value={"Reset Password"} className="border-2 w-full rounded-full cursor-pointer text-white bg-orange-500 py-2 text-xl mt-4 active:scale-95 hover:bg-transparent hover:text-orange-500 transition-all" />
                            </Link>
                        </div>
                    </form>

                    <div className="text-center mt-3 flex justify-center  items-center gap-1">
                        <BsArrowLeft className='text-gray-400' />
                        <Link to={"/login"} className="hover:underline text-gray-400 hover:text-black transition-all ">back to Login</Link>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SetNewPassword