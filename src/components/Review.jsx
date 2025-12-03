import { useEffect, useState } from "react";

function Review() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [reviews, setReviews] = useState(() => {
    const savedReviews = localStorage.getItem("reviews");
    return savedReviews ? JSON.parse(savedReviews) : [];
  });

  useEffect(() => {
    localStorage.setItem("reviews", JSON.stringify(reviews));
  }, [reviews]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newReview = { name, email, message };

    setReviews([...reviews, newReview]);

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="flex flex-col items-center mt-5">
      <form onSubmit={handleSubmit} className="flex flex-col w-[500px] gap-4">
        <input
          type="text"
          placeholder="Name"
          className="border p-2 rounded-md"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email"
          className="border p-2 rounded-md"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <textarea
          placeholder="Message"
          className="border p-2 rounded-md h-[150px] resize-none"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-500"
        >
          Tambah Review
        </button>
      </form>

      <div className="grid grid-cols-3 gap-4 mt-8 w-[80%]">
        {reviews.map((item, index) => (
          <div key={index} className="border p-4 shadow rounded-md">
            <h3 className="font-bold text-lg">{item.name}</h3>
            <p className="text-sm text-gray-600">{item.email}</p>
            <p className="mt-2">{item.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Review;
