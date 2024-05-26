import { FcGoogle } from "react-icons/fc";

export default function GoogleLogin() {
  return (
    <div className=" bg-green-400 px-5 py-3 rounded-md flex justify-center items-center">
      <FcGoogle className="text-xl"></FcGoogle>
      <button className="text-white font-semibold">Google</button>
    </div>
  );
}
