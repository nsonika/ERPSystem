// // // Login.jsx
// // import React, { useState } from 'react';
// // import { auth } from '../Firebase/config';
// // import { signInWithEmailAndPassword } from 'firebase/auth';
// // import { useNavigate } from 'react-router-dom';

// // const Login = () => {
// //     const navigate = useNavigate();
// //     const [email, setEmail] = useState('');
// //     const [password, setPassword] = useState('');

// //     const handleLogin = async () => {
// //         try {
// //             await signInWithEmailAndPassword(auth, email, password);
// //             // Redirect to the dashboard or another page upon successful login
// //             console.log('Login successful');
// //             navigate('/dashboard');
// //         } catch (error) {
// //             console.error('Login failed:', error.message);
// //             // Handle login failure (e.g., display an error message)
// //         }
// //     };

// //     return (
// //         <div className="container-fluid d-flex align-items-center justify-content-center vh-100">
// //             <div className="card">
// //                 <div className="card-header">
// //                     <h2 className="text-center">Login</h2>
// //                 </div>
// //                 <div className="card-body">
// //                     <form>
// //                         <div className="mb-3">
// //                             <label htmlFor="email" className="form-label">
// //                                 Email:
// //                             </label>
// //                             <input
// //                                 type="email"
// //                                 className="form-control"
// //                                 id="email"
// //                                 value={email}
// //                                 onChange={(e) => setEmail(e.target.value)}
// //                             />
// //                         </div>
// //                         <div className="mb-3">
// //                             <label htmlFor="password" className="form-label">
// //                                 Password:
// //                             </label>
// //                             <input
// //                                 type="password"
// //                                 className="form-control"
// //                                 id="password"
// //                                 value={password}
// //                                 onChange={(e) => setPassword(e.target.value)}
// //                             />
// //                         </div>
// //                         <div className="d-grid">
// //                             <button
// //                                 type="button"
// //                                 className="btn btn-primary"
// //                                 onClick={handleLogin}
// //                             >
// //                                 Login
// //                             </button>
// //                         </div>
// //                     </form>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };

// // export default Login;



// // Login.jsx
// // import React, { useState } from 'react';
// // import { auth } from '../Firebase/config';
// // import { signInWithEmailAndPassword } from 'firebase/auth';
// // import { useNavigate } from 'react-router-dom';

// // const Login = () => {
// //     const navigate = useNavigate();
// //     const [email, setEmail] = useState('');
// //     const [password, setPassword] = useState('');

// //     const handleLogin = async () => {
// //         try {
// //             // Sign in with email and password
// //             const userCredential = await signInWithEmailAndPassword(auth, email, password);

// //             // Extract user information
// //             const user = userCredential.user;

// //             // Save user information to local storage
// //             localStorage.setItem('userId', user.uid);
// //             localStorage.setItem('email', user.email);

// //             // Redirect to the dashboard or another page upon successful login
// //             console.log('Login successful');
// //             navigate('/dashboard');
// //         } catch (error) {
// //             console.error('Login failed:', error.message);
// //             // Handle login failure (e.g., display an error message)
// //         }
// //     };

// //     return (
// //         <div className="container-fluid d-flex align-items-center justify-content-center vh-100">
// //             <div className="card">
// //                 <div className="card-header">
// //                     <h2 className="text-center">Login</h2>
// //                 </div>
// //                 <div className="card-body">
// //                     <form>
// //                         <div className="mb-3">
// //                             <label htmlFor="email" className="form-label">
// //                                 Email:
// //                             </label>
// //                             <input
// //                                 type="email"
// //                                 className="form-control"
// //                                 id="email"
// //                                 value={email}
// //                                 onChange={(e) => setEmail(e.target.value)}
// //                             />
// //                         </div>
// //                         <div className="mb-3">
// //                             <label htmlFor="password" className="form-label">
// //                                 Password:
// //                             </label>
// //                             <input
// //                                 type="password"
// //                                 className="form-control"
// //                                 id="password"
// //                                 value={password}
// //                                 onChange={(e) => setPassword(e.target.value)}
// //                             />
// //                         </div>
// //                         <div className="d-grid">
// //                             <button
// //                                 type="button"
// //                                 className="btn btn-primary"
// //                                 onClick={handleLogin}
// //                             >
// //                                 Login
// //                             </button>
// //                         </div>
// //                     </form>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };

// // export default Login;














// // Login.jsx
// import React, { useState } from 'react';
// import { auth } from '../Firebase/config';
// import { signInWithEmailAndPassword } from 'firebase/auth';
// import { useNavigate } from 'react-router-dom';
// import "./Login.css";

// const Login = ({ setIsAuth }) => {
//     const navigate = useNavigate();
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const handleLogin = async () => {
//         try {
//             // Sign in with email and password
//             const userCredential = await signInWithEmailAndPassword(auth, email, password);

//             // Extract user information
//             const user = userCredential.user;

//             // Save user information to local storage
//             localStorage.setItem('userId', user.uid);
//             localStorage.setItem('email', user.email);

//             // Set authentication state
//             setIsAuth(true);

//             // Redirect to the dashboard or another page upon successful login
//             console.log('Login successful');
//             navigate('/dashboard');
//         } catch (error) {
//             console.error('Login failed:', error.message);
//             // Handle login failure (e.g., display an error message)
//         }
//     };

//     return (
//         <div className="container-fluid d-flex align-items-center justify-content-center vh-100">
//             <div className="card">
//                 <div className="card-header">
//                     <h2 className="text-center">Login</h2>
//                 </div>
//                 <div className="card-body">
//                     <form>
//                         <div className="mb-3">
//                             <label htmlFor="email" className="form-label">
//                                 Email:
//                             </label>
//                             <input
//                                 type="email"
//                                 className="form-control"
//                                 id="email"
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                             />
//                         </div>
//                         <div className="mb-3">
//                             <label htmlFor="password" className="form-label">
//                                 Password:
//                             </label>
//                             <input
//                                 type="password"
//                                 className="form-control"
//                                 id="password"
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)}
//                             />
//                         </div>
//                         <div className="d-grid">
//                             <button
//                                 type="button"
//                                 className="btn btn-primary"
//                                 onClick={handleLogin}
//                             >
//                                 Login
//                             </button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Login;




// import React, { useState } from 'react';
// import { auth } from '../Firebase/config';
// import { signInWithEmailAndPassword } from 'firebase/auth';
// import { useNavigate } from 'react-router-dom';
// import "./Login.css";

// const Login = ({ setIsAuth }) => {
//     const navigate = useNavigate();
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const handleLogin = async () => {
//         try {
//             // Sign in with email and password
//             const userCredential = await signInWithEmailAndPassword(auth, email, password);

//             // Extract user information
//             const user = userCredential.user;

//             // Save user information to local storage
//             localStorage.setItem('userId', user.uid);
//             localStorage.setItem('email', user.email);

//             // Set authentication state
//             setIsAuth(true);

//             // Redirect to the dashboard or another page upon successful login
//             console.log('Login successful');
//             navigate('/dashboard');
//         } catch (error) {
//             console.error('Login failed:', error.message);
//             // Handle login failure (e.g., display an error message)
//         }
//     };

//     return (
//         <div className="login-container">
//             <div className="custom-card">
//                 <div className="custom-card-header">
//                     <h2 className="custom-text-center">Login</h2>
//                 </div>
//                 <div className="custom-card-body">
//                     <form>
//                         <div className="custom-input-group">
//                             <label htmlFor="email" className="custom-label">
//                                 Email:
//                             </label>
//                             <input
//                                 type="email"
//                                 className="custom-input"
//                                 id="email"
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                             />
//                         </div>
//                         <div className="custom-input-group">
//                             <label htmlFor="password" className="custom-label">
//                                 Password:
//                             </label>
//                             <input
//                                 type="password"
//                                 className="custom-input"
//                                 id="password"
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)}
//                             />
//                         </div>
//                         <div className="custom-button-group">
//                             <button
//                                 type="button"
//                                 className="custom-button"
//                                 onClick={handleLogin}
//                             >
//                                 Login
//                             </button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Login;





















import React, { useState } from 'react';
import { auth } from '../Firebase/config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import "./Login.css";

const Login = ({ setIsAuth }) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleLogin = async () => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            localStorage.setItem('userId', user.uid);
            localStorage.setItem('email', user.email);
            setIsAuth(true);
            navigate('/dashboard');
        } catch (error) {
            setError('Invalid email or password. Please try again.');
        }
    };

    return (
        <div className="login-container">
            <div className="custom-card">
                <div className="custom-card-header">
                    <h2 className="custom-text-center">Login</h2>
                </div>
                <div className="custom-card-body">
                    {error && <p className="error-message">{error}</p>}
                    <form>
                        <div className="custom-input-group">
                            <label htmlFor="email" className="custom-label">
                                Email:
                            </label>
                            <input
                                type="email"
                                className="custom-input"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="custom-input-group">
                            <label htmlFor="password" className="custom-label">
                                Password:
                            </label>
                            <input
                                type="password"
                                className="custom-input"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="custom-button-group">
                            <button
                                type="button"
                                className="custom-button"
                                onClick={handleLogin}
                            >
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
