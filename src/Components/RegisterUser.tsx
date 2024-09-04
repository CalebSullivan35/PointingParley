import { ref, update } from "firebase/database";
import { getAnonymousId } from "../utils/getAnoymousId";
import { useState } from "react";
import { database } from "../firebase";

export const RegisterUser = () => {
 const userId = getAnonymousId();
 const playerRef = ref(database, `users/${userId}`);
 const [name, setName] = useState("");

 function registerUser() {
  update(playerRef, {
   name,
   id: userId,
  });
 }

 return (
  <div className="mx-auto my-auto px-8 py-4 bg-gray-900 rounded-2xl text-white flex flex-col items-center">
   <h1 className="text-center mb-2 text-2xl font-bold">Register</h1>
   <div className="flex flex-col justify-center items-center">
    <input
     className="mb-4 input input-bordered w-full text-black"
     onChange={(e) => setName(e.target.value)}
     type="text"
     name="name"
     placeholder="enter your name"
    />
    <button className="btn btn-secondary w-32" onClick={registerUser}>
     Join
    </button>
   </div>
  </div>
 );
};
