import Lottie from "lottie-react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import ani from "./login.json"

export default function Login() {
  return (
    <div>
      <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-3 py-3">
        <div className="flex justify-center items-center lg:py-[5%] px-[2%] md:w-1/2">
          <form
            className="max-w-sm w-full text-center"
            // onSubmit={handleSubmit(onSubmit)}
          >
            <div className="form-control">
              <h1 className=" text-3xl font-semibold text-center my-5 border-b-2 border-[#f4976c] py-2">
                Login Now
              </h1>
              <label className="label">
                <span className="label-text font-semibold">
                  *Enter Your Email
                </span>
              </label>
              <input
                type="text"
                placeholder="Email"
                className="input input-bordered input-accent w-full"
                // {...register("Email", {
                //   required: true,
                //   pattern: /^\S+@\S+$/i,
                // })}
              />

              <label className="label">
                <span className="label-text font-semibold">
                  *Enter Your Password
                </span>
              </label>
              <input
                type="password"
                placeholder="Password"
                // {...register("Password", { required: true })}
                className="input input-bordered input-accent w-full "
              />

              <div className="mt-4">
                <p>
                  New User?{" "}
                  <Link to="/signup" className="font-semibold">
                    Sign Up
                  </Link>{" "}
                </p>
              </div>

              <div className="text-center mt-[4%]">
                <button type="submit" className="btn">
                  Login
                </button>
              </div>
              <div className="divider">Or Sign in With</div>
              <div className="flex justify-around items-center gap-2">
                <div
                //   onClick={handleGoogleSignin}
                  className=" bg-green-400 px-5 py-3 rounded-md flex justify-center items-center"
                >
                  <FcGoogle className="text-xl"></FcGoogle>
                  <button className="text-white font-semibold">Google</button>
                </div>
                <div className=" bg-cyan-400 px-5 py-3 rounded-md flex justify-center items-center">
                  <FaGithub className="text-xl text-black"></FaGithub>
                  <button className="text-black font-semibold">GitHub</button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="md:w-1/2">
          <Lottie
            className="h-[400px] lg:h-[600px]"
            animationData={ani}
          ></Lottie>
        </div>
      </div>
    </div>
  );
}
