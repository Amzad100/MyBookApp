import useAuth from "../hooks/useAuth";
import useTitle from "../hooks/useTitle";

export default function Dashboard() {
  const { user } = useAuth();
  useTitle("Dashboard");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-center">
        <h1 className="text-center text-2xl mb-2 font-bold">User Ui</h1>
        <img
          className="w-32 h-32 rounded-full mb-4"
          src={user.photoURL}
          alt={`${user.displayName}'s profile`}
        />
        <h1 className="text-2xl font-bold mb-2">{user.displayName}</h1>
        <h2 className="text-gray-600 mb-1">{user.email}</h2>
      </div>
    </div>
  );
}
