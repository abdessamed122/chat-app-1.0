import { Link } from 'react-router-dom';
import GenderCheckbox from "./GenderCheckbox";
import { useState } from 'react';
import useSignup from '../../hooks/useSignup';
import Footer from '../../components/Footer';

const SignUp = () => {
  const { loading, signup } = useSignup();
  const [inputs, setInputs] = useState({
    fullname: '',
    username: '',
    password: '',
    confirmpassword: '',
    gender: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const handleGenderChange = (gender) => {
    setInputs({
      ...inputs,
      gender
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(inputs);
  };

  return (
    <div className="flex flex-col min-h-screen ">
    <div className='flex flex-col items-center justify-center min-h-screen mx-auto px-4 sm:px-6 lg:px-8'>
      <div className='w-full max-w-md p-6 rounded-lg shadow-md bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
          Sign Up <span className='text-purple-500'>ChatApp</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text text-purple-100'>Full Name</span>
            </label>
            <input
              type='text'
              name='fullname'
              placeholder='John Doe'
              className='w-full input input-bordered h-10'
              value={inputs.fullname}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text text-purple-100'>Username</span>
            </label>
            <input
              type='text'
              name='username'
              placeholder='johndoe'
              className='w-full input input-bordered h-10'
              value={inputs.username}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className='label'>
              <span className='text-base label-text text-purple-100'>Password</span>
            </label>
            <input
              type='password'
              name='password'
              placeholder='Enter Password'
              className='w-full input input-bordered h-10'
              value={inputs.password}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className='label'>
              <span className='text-base label-text text-purple-100'>Confirm Password</span>
            </label>
            <input
              type='password'
              name='confirmpassword'
              placeholder='Confirm Password'
              className='w-full input input-bordered h-10'
              value={inputs.confirmpassword}
              onChange={handleChange}
            />
          </div>

          <GenderCheckbox
            onCheckboxChange={handleGenderChange}
            selectedGender={inputs.gender}
          />

          <Link className='text-sm text-blue-100 hover:underline hover:text-blue-500 mt-2 inline-block' to='/login'>
            Already have an account?
          </Link>

          <div>
            <button type='submit' className='btn btn-block btn-sm mt-2 border border-slate-700'
		disabled={loading}>
              {loading ?<span className='loading loading-spinner text-purple-950'></span>: 'Sign Up'}
            </button>
          </div>
        </form>
      </div><Footer></Footer>
    </div>
    
    </div>
  );
};

export default SignUp;








// import { Link } from 'react-router-dom';
// // STARTER CODE FOR THE SIGNUP COMPONENT
// import GenderCheckbox from "./GenderCheckbox";
// import { useState } from 'react';
// import useSignup from '../../hooks/useSignup';

// const SignUp = () => {
//   const { loading, signup } = useSignup();
//   const [inputs, setInputs] = useState({
//     fullname: '',
//     username: '',
//     password: '',
//     confirmpassword: '',
//     gender: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setInputs({
//       ...inputs,
//       [name]: value
//     });
//   };

//   const handleGenderChange = (gender) => {
//     setInputs({
//       ...inputs,
//       gender
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     signup(inputs);
//   };

//   return (
//     <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//       <div className='w-full p-6 rounded-lg shadow-md bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40'>
//         <h1 className='text-3xl font-semibold text-center text-gray-300'>
//           Sign Up <span className='text-purple-500'>ChatApp</span>
//         </h1>
//         <form onSubmit={handleSubmit}>
//           <div>
//             <label className='label p-2'>
//               <span className='text-base label-text text-purple-100'>Full Name</span>
//             </label>
//             <input
//               type='text'
//               name='fullname'
//               placeholder='John Doe'
//               className='w-full input input-bordered h-10'
//               value={inputs.fullname}
//               onChange={handleChange}
//             />
//           </div>

//           <div>
//             <label className='label p-2'>
//               <span className='text-base label-text text-purple-100'>username</span>
//             </label>
//             <input
//               type='text'
//               name='username'
//               placeholder='johndoe'
//               className='w-full input input-bordered h-10'
//               value={inputs.username}
//               onChange={handleChange}
//             />
//           </div>

//           <div>
//             <label className='label'>
//               <span className='text-base label-text text-purple-100'>Password</span>
//             </label>
//             <input
//               type='password'
//               name='password'
//               placeholder='Enter Password'
//               className='w-full input input-bordered h-10'
//               value={inputs.password}
//               onChange={handleChange}
//             />
//           </div>

//           <div>
//             <label className='label'>
//               <span className='text-base label-text text-purple-100'>Confirm Password</span>
//             </label>
//             <input
//               type='password'
//               name='confirmpassword'
//               placeholder='Confirm Password'
//               className='w-full input input-bordered h-10'
//               value={inputs.confirmpassword}
//               onChange={handleChange}
//             />
//           </div>

//           <GenderCheckbox
//             onCheckboxChange={handleGenderChange}
//             selectedGender={inputs.gender}
//           />

//           <Link className='text-sm text-blue-100 hover:underline hover:text-blue-500 mt-2 inline-block' to='/login'>
//             Already have an account?
//           </Link>

//           <div>
//             <button type='submit' className='btn btn-block btn-sm mt-2 border border-slate-700'
// 		disabled={loading}>
//               {loading ?<span className='loading loading-spinner text-purple-950'></span>: 'Sign Up'}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignUp;

