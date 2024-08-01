import { useState } from 'react';
import { Link } from 'react-router-dom';
import useLogin from '../../hooks/useLogin';
import Footer from '../../components/Footer';

const Login = () => {

	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const { loading, login } = useLogin();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await login(username, password);
	}

	return (<div className="flex flex-col min-h-screen mt-10">

		<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
			<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20'>
				<h1 className='text-3xl font-semibold text-center text-gray-300'>
					Login
					<span className='text-b  text-purple-500'> ChatApp</span>
				</h1>

				<form onSubmit={handleSubmit}>
					<div>
						<label className='label p-2'>
							<span className='text-base label-text text-purple-100'>Username</span>
						</label>
						<input
							type='text'
							placeholder='Enter username'
							className='w-full input input-bordered h-10'
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
					</div>

					<div>
						<label className='label'>
							<span className='text-base label-text text-gray-100'>Password</span>
						</label>
						<input
							type='password'
							placeholder='Enter Password'
							className='w-full input input-bordered h-10'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<Link to={"/signup"} className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block text-gray-100'>
						{"Don't"} have an account?
					</Link>

					<div>
						<button className='btn btn-block btn-sm mt-2' disabled={loading}>
							{loading ? <span className='loading loading-spinner text-purple-950'></span> : "Login"}
						</button>
					</div>
				</form>
			</div>
		</div>
		<Footer className="mt-1"></Footer>
		</div >
	);
}

export default Login;





// ///////////////////////////////////////
// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import useLogin from '../../hooks/useLogin';
// // STARTER CODE FOR THIS FILE
// const Login = () => {

// 	const [username,setUsername]=useState("");
// 	const [password,setPasssword]=useState("");
// 	const{loading,login}=useLogin()

// 	const handleSubmit= async(e)=>{
// 		e.preventDefault();
// 		await login(username,password)
// 	}

//     (
// 		<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
// 			<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20'>
// 				<h1 className='text-3xl font-semibold text-center text-gray-300'>
// 					Login
// 					<span className='text-b  text-purple-500'> ChatApp</span>
// 				</h1>

// 				<form onSubmit={handleSubmit}>
// 					<div>
// 						<label className='label p-2'>
// 							<span className='text-base label-text text-purple-100'>Username</span>
// 						</label>
// 						<input type='text' placeholder='Enter username' className='w-full input input-bordered h-10'
// 						value={username}
// 						onChange={(e)=>setUsername(e.target.value)}
// 						/>
// 					</div>

// 					<div>
// 						<label className='label'>
// 							<span className='text-base label-text  text-gray-100'>Password</span>
// 						</label>
// 						<input
// 							type='password'
// 							placeholder='Enter Password'
// 							className='w-full input input-bordered h-10'
// 							value={password}
// 						onChange={(e)=>setPasssword(e.target.value)}
// 						/>
// 					</div>
// 					<Link to={"/signup"} className='text-sm  hover:underline hover:text-blue-600 mt-2 inline-block  text-gray-100'>
// 						{"Don't"} have an account?
// 					</Link>

// 					<div>
// 						<button className='btn btn-block btn-sm mt-2 '
// 						disabled={loading}>
// 							{loading ? <span className='loading loading-spinner'></span>:"Login"}
// 							</button>
// 					</div>
// 				</form>
// 			</div>
// 		</div>
// 	);
// }

// export default Login
