import React from 'react'

function Review( ) {
    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [message, setMessage] = useState("");
  
    // const handleSubmit = (e) => {
    //   e.preventDefault();
  
    //   const newProduct = { name, email, message, };
    //   onAddProduct(newProduct);
  
    //   setName("");
    //   setEmail("");
    //   setMessage("");
  return (
    <div className='flex justify-center mt-5'>
        <form className='flex flex-col w-[500px] gap-5'>
            <input type="text" placeholder="Name" className="border p-2 rounded-md" />
            <input type="Email" placeholder="Email" className="border p-2 rounded-md" />
            <textarea name="message" className="border p-2 rounded-md h-[200px] resize-none" ></textarea>

            <button type="submit" className= "bg-blue-500 text-white py-2 rounded-md cursor-pointer hover:bg-blue-400">
                Tambah
            </button>
        </form>
    </div>
  )
}

export default Review
