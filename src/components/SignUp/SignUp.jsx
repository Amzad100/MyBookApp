import Lottie from "lottie-react";
import ani from "./signup.json";
import useTitle from "../../hooks/useTitle";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function SignUp() {
  useTitle("SignUP");
  const { createUser } = useAuth();
  const { reset } = useForm();
  const navigate = useNavigate();

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

    createUser(email, password)
      .then((resutl) => {
        const user = resutl.user;
        console.log(user);
        reset();
        Swal.fire({
          icon: "success",
          title: "SignUp successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-5 px-3 py-5">
        <div className="">
          <Lottie className="lg:h-[600px]" animationData={ani}></Lottie>
        </div>
        <div className="flex justify-center items-center lg:py-[5%]">
          <form className="max-w-sm w-full text-center" onSubmit={handleSignUp}>
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
                name="email"
                required
                className="input input-bordered input-accent w-full"
              />

              <label className="label">
                <span className="label-text font-semibold">
                  *Choose Password
                </span>
              </label>
              <input
                type="password"
                placeholder="Password"
                name="password"
                required
                className="input input-bordered input-accent w-full "
              />

              <label className="label">
                <span className="label-text font-semibold">
                  *Enter Your Name
                </span>
              </label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                required
                className="input input-bordered input-accent w-full"
              />

              <div className="text-center mt-[4%]">
                <button type="submit" className="my-btn">
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
