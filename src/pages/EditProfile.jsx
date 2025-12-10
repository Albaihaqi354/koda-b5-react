import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../contexts/userManajemen/userContext";

function EditProfile() {
  const { state, dispatch } = useContext(userContext);
  const [newProfilePhoto, setNewProfilePhoto] = useState(state.profile_photo);
  const navigate = useNavigate();

  useEffect(() => {
    if (!state.isLoggedIn) navigate("/login");
  }, [state.isLoggedIn, navigate]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const previewUrl = URL.createObjectURL(file);
    setNewProfilePhoto(previewUrl);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    dispatch({
      type: "UPDATE_PROFILE",
      payload: {
        profile_photo: newProfilePhoto,
      },
    });

    navigate("/");
  };

  useEffect(() => {
    return () => {
      if (newProfilePhoto && newProfilePhoto.startsWith("blob:")) {
        URL.revokeObjectURL(newProfilePhoto);
      }
    };
  }, [newProfilePhoto]);

  if (!state.isLoggedIn) return null;

  return (
    <main className="p-5">
      <h1 className="text-xl font-semibold mb-4">Edit Profile</h1>
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="flex flex-col items-start gap-2">
          {newProfilePhoto ? (
            <img
              src={newProfilePhoto}
              alt="Profile Preview"
              className="w-20 h-20"
            />
          ) : (
            <div className="w-20 h-20 bg-gray-300" />
          )}

          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="text-sm"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
        >
          Submit
        </button>
      </form>
    </main>
  );
}

export default EditProfile;
