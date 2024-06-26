
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./components/homepage";
import CategoriesPage from "./components/categoriesPage";
import BlogPosts from './components/blogPosts';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/blogposts" element={<BlogPosts/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

// const HomePage = () => {
//   return (
//     <div>
//       <h1 className="m-5">My Blog App</h1>
//       <p style={{ fontSize: "18px" }}>
//         Welcome to my blog! I'm excited to share my thoughts with the world.
//       </p>
//       <div
//         style={{ width: "100%", display: "flex", justifyContent: "center" }}
//         className="m-5 p-5"
//       >
//         <div className="card m-5" style={{ width: "18rem" }}>
//           <img src={logo} className="card-img-top" alt="..." />
//           <div className="card-body">
//             <h5 className="card-title">Card title</h5>
//             <p className="card-text">
//               Some quick example text to build on the card title and make up the
//               bulk of the card's content.
//             </p>
//             <a href="./" className="btn btn-primary">
//               Read
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// function App() {

//   const user = {
//     firstname: "Jean Yves",
//     lastname: "Gatwaza",
//     bio: "bio",
//     email:"jgatwazakubwimana@college.harvard.edu",
//     image: "https://www.techfinitive.com/wp-content/uploads/2023/06/Untitled-jpeg.webp",
//     authenticate: true,
//   };
//   const blogs = [
//     {id: 1,
//       title:"Nancy Drew",
//       author: user
//     },
//     { 
//       id: 2,
//       title:"Frankenstein Victor",
//       author: user
//     }
//   ]
//   return ( user.authenticate ?
//     <>
//       <h1>Welcome {user["firstname"]}</h1>
//       <img src={user.image} alt="ifoto, wann"></img>
//       <div>
//         {
//           blogs.map((blog)=> {
//             return(
//               <>
//               <h1>{blog.title}</h1>
//               </>
//             )
//           })
//         }
//       </div>
//     </> :  
//     <>
//       <h1>Login, brav!</h1>
//     </>

// return (
//   <div className="App">
//     <HomePage />
//   </div>
// );
// };
