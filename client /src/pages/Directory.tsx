// import React, { useState, useEffect } from "react";
// import api from "../services/api";
// // import { Link } from "react-router-dom";

// // interface User {
// //   _id: string;
// //   name: string;
// //   email: string;
// //   bio: string;
// // }

// // const Directory: React.FC = () => {
// //   const [users, setUsers] = useState<User[]>([]);
// //   const [search, setSearch] = useState("");

// //   useEffect(() => {
// //     const fetchUsers = async () => {
// //       try {
// //         const response = await api.get("/users" + email, {
// //           headers: {
// //             Authorization: `Bearer ${localStorage.getItem("token")}`,
// //           },
// //         });
// //         setUsers(response.data);
// //       } catch (error) {
// //         console.error("Error fetching users");
// //       }
// //     };

// //     fetchUsers();
// //   }, []);

// //   const filteredUsers = users.filter(
// //     (user) =>
// //       user.name.toLowerCase().includes(search.toLowerCase()) ||
// //       user.email.toLowerCase().includes(search.toLowerCase())
// //   );

// //   return (
// //     <div className="max-w-4xl mx-auto mt-10 px-4 sm:px-6 lg:px-8">
// //       <h1 className="text-2xl font-bold mb-4 text-center sm:text-left">
// //         User Directory
// //       </h1>
// //       <input
// //         type="text"
// //         placeholder="Search by email"
// //         value={search}
// //         onChange={(e) => setSearch(e.target.value)}
// //         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-4 leading-tight focus:outline-none focus:shadow-outline"
// //       />
// //       <ul className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
// //         {filteredUsers.length > 0 ? (
// //           filteredUsers.map((user) => (
// //             <li key={user._id} className="mb-4 border-b pb-4 last:border-none">
// //               <Link
// //                 to={`/users/${user._id}`}
// //                 className="text-blue-500 hover:underline block"
// //               >
// //                 <p className="font-bold text-lg">{user.name}</p>
// //                 <p className="text-sm text-gray-600">{user.email}</p>
// //                 <p className="text-sm">{user.bio}</p>
// //               </Link>
// //             </li>
// //           ))
// //         ) : (
// //           <li className="text-gray-500 text-center">No users found</li>
// //         )}
// //       </ul>
// //     </div>
// //   );
// // };

// // export default Directory;

// import axios from "axios";

// const Directory: React.FC = () => {
//   const [email, setEmail] = useState("");
//   const [result, setResult] = useState(null);
//   const [error, setError] = useState("");

//   const handleSearch = async () => {
//     try {
//       setError("");
//       const response = await api.get(`/api/users/${email}`);
//       console.log(response.data);
//       setResult(response.data);
//     } catch (err) {
//       setError("User not found or there was an error.");
//     }
//   };

//   const handleSubmit = (e: any) => {
//     e.preventDefault();
//     handleSearch();
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="Enter email"
//           required
//         />
//         <button type="submit">Search</button>
//       </form>

//       {error && <p style={{ color: "red" }}>{error}</p>}
//       {result && (
//         <div>
//           <h3>User Information</h3>
//           {/* <p>Name: {result}</p>
//           <p>Email: {result}</p>  */}

//         </div>
//       )}
//     </div>
//   );
// };

// export default Directory;

import React, { useState, useEffect } from "react";
import api from "../services/api";
import { Link } from "react-router-dom";

interface User {
  _id: string;
  name: string;
  email: string;
  bio: string;
}

const Directory: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [search, setSearch] = useState("");
  const [email, setEmail] = useState("");
  const [result, setResult] = useState<User | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await api.get("/users", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users");
      }
    };

    fetchUsers();
  }, []);

  const handleSearch = async () => {
    try {
      setError("");
      const response = await api.get(`/api/users/${email}`);
      setResult(response.data);
    } catch (err) {
      setError("User not found or there was an error.");
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSearch();
  };

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-lg mx-auto mt-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold mb-6 text-center">
        User Directory
      </h1>

      {/* Search Form */}
      {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Search by email"
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline w-full"
        >
          Search
        </button>
      </form>

      {result && (
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h3 className="text-xl text-center font-bold mb-4">User Information</h3>
          <p className="font-bold text-lg">{result.name}</p>
          <p className="text-sm text-gray-600">{result.email}</p>
          <p className="text-sm text-gray-600">{result.bio}</p>
          <p className="text-sm">{result.bio}</p>
        </div>
      )}
    </div>
  );
};

export default Directory;
