// import { useSelector } from "react-redux";
// import { Link, NavLink } from "react-router-dom";

// export default function AccountNavigation() {
//   const { currentUser } = useSelector((state: any) => state.accountReducer);
//   const links = currentUser ? ["Profile"] : ["Signin", "Signup"];

//   function active(arg0: string) {
//     throw new Error("Function not implemented.");
//   }

//   return (
//     <div id="wd-account-navigation" className="list-group fs-5 rounded-0">
//       {links.includes("Signin") && (
//         <NavLink
//           to="/Kanbas/Account/Signin"
//           id="wd-account-signin-link"
//           className={({ isActive }) =>
//             isActive
//               ? "list-group-item text-black border-start border-3 border-dark border-end-0 border-top-0 border-bottom-0"
//               : "list-group-item text-danger border border-0"
//           }
//         >
//           Signin
//         </NavLink>
//       )}
//       {links.includes("Signup") && (
//         <NavLink
//           to="/Kanbas/Account/Signup"
//           id="wd-account-signup-link"
//           className={({ isActive }) =>
//             isActive
//               ? "list-group-item text-black border-start border-3 border-dark border-end-0 border-top-0 border-bottom-0"
//               : "list-group-item text-danger border border-0"
//           }
//         >
//           Signup
//         </NavLink>
//       )}
//       {links.includes("Profile") && (
//         <NavLink
//           to="/Kanbas/Account/Profile"
//           id="wd-account-profile-link"
//           className={({ isActive }) =>
//             isActive
//               ? "list-group-item text-black border-start border-3 border-dark border-end-0 border-top-0 border-bottom-0"
//               : "list-group-item text-danger border border-0"
//           }
//         >
//           Profile
//         </NavLink>
//       )}
//           {currentUser && currentUser.role === "FACULTY" && (
//        <Link to={`/Kanbas/Account/Users`} className={`list-group-item ${active("Users")}`}> Users </Link> )}
//     </div>
//   );
// }

import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
export default function AccountNavigation() {
 const { currentUser } = useSelector((state: any) => state.accountReducer);
 const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
 const active = (path: string) => (pathname.includes(path) ? "active" : "");
 const { pathname } = useLocation();
 return (
   <div id="wd-account-navigation" className="list-group">
     {links.map((link) => (
       <Link key={link} to={`/Kanbas/Account/${link}`} className={`list-group-item ${active(link)}`}> {link} </Link>
     ))}
     {currentUser && currentUser.role === "FACULTY" && (
       <Link to={`/Kanbas/Account/Users`} className={`list-group-item ${active("Users")}`}> Users </Link> )}
   </div>
);}
