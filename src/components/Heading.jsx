import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userContext } from "../contexts/userManajemen/userContext";

function Heading({ title }) {
  const { state, dispatch } = useContext(userContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/login");
  };

  return (
    <header className="p-10 h-[15vh] bg-[#6DC3BB] font-bold select-none flex justify-between items-center">
      <h1 className="font-sans font-black text-3xl">{title}</h1>

      <nav className="flex justify-center">
        <ul className="flex gap-7 text-[25px] items-center">

          <li className="text-black hover:text-amber-50">
            <Link to="/Home">Home</Link>
          </li>
          <li className="text-black hover:text-amber-50">
            <Link to="/Product">Product</Link>
          </li>
          <li className="text-black hover:text-amber-50">
            <Link to="/characters">RickAndMorty</Link>
          </li>

          {state.isLoggedIn ? (
            <>
              <li className="flex items-center gap-2 text-black">
                {state.profile_photo ? (
                  <img
                    src={state.profile_photo}
                    alt={state.username}
                    className="w-10 h-10"
                  />
                ) : (
                  <div className="w-10 h-10 bg-white" />
                )}
                <span>{state.username}</span>
              </li>

              <li className="text-black hover:text-amber-50">
                <Link to="/editProfile">Edit Profile</Link>
              </li>

              <li>
                <button
                  onClick={handleLogout}
                  className="text-black hover:text-amber-50"
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <li>
              <Link
                to="/login"
                className="bg-white text-[#6DC3BB] px-4 py-2 rounded hover:bg-gray-200"
              >
                Login
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Heading;
