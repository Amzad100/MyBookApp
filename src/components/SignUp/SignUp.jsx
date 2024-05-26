import Lottie from "lottie-react";
import ani from './signup.json'

export default function SignUp() {
  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-5 px-3 py-5">
        <div className="">
          <Lottie className="lg:h-[600px]" animationData={ani}></Lottie>
        </div>
        <div className="flex justify-center items-center lg:py-[5%]">
          <form
            className="max-w-sm w-full text-center"
            // onSubmit={handleSubmit(onSubmit)}
          >
            <div className="form-control">
              <h1 className="text-3xl font-semibold text-center my-5 border-b-2 pb-2 border-[#f4976c]">
                Registration Now
              </h1>
              {/* {errors.Email && <p role="alert">*{errors.Email?.message}</p>}
              {errors.Roll && <p role="alert">*{errors.Roll?.message}</p>}
              {errors.Name && <p role="alert">*{errors.Name?.message}</p>} */}
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
                //   required: "Email is Required",
                //   pattern: /^\S+@\S+$/i,
                // })}
              />

              <label className="label">
                <span className="label-text font-semibold">
                  *Choose Password
                </span>
              </label>
              <input
                type="password"
                placeholder="Password"
                // {...register("Password", { required: "Password is Required" })}
                className="input input-bordered input-accent w-full "
              />

              <div className="flex flex-col md:flex-row justify-center items-center gap-5">
                <div className="form-control w-full ">
                  <label className="label">
                    <span className="label-text font-semibold">
                      *Enter Your Name
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    // {...register("Name", { required: "Name is Required" })}
                    className="input input-bordered input-accent w-full"
                  />
                </div>

                <div className="form-control w-full ">
                  <label className="label">
                    <span className="label-text font-semibold">
                      *Class Roll
                    </span>
                  </label>
                  <input
                    type="number"
                    placeholder="Roll"
                    // {...register("Roll", {
                    //   required: "Roll Number is Required",
                    //   maxLength: { value: 4, message: "Enter Maximum 4 digit" },
                    //   minLength: { value: 3, message: "Minimum 4 digit" },
                    // })}
                    className="input input-bordered input-accent w-full"
                  />
                </div>
              </div>

              <div className="text-center mt-[4%]">
                <button type="submit" className="btn">
                  SignUP
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
