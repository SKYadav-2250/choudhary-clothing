import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Mock login
        if (email && password) {
            localStorage.setItem('user', JSON.stringify({ email, name: email.split('@')[0] }));
            navigate('/account');
        }
    };

    const handleGoogleSuccess = (credentialResponse: any) => {
        if (credentialResponse.credential) {
            const decoded: any = jwtDecode(credentialResponse.credential);
            localStorage.setItem('user', JSON.stringify({
                email: decoded.email,
                name: decoded.name,
                picture: decoded.picture
            }));
            navigate('/account');
        }
    };

    return (
        <div className="pt-24 min-h-screen pb-16 bg-gray-50 flex items-center justify-center px-4">
            <div className="bg-white p-8 max-w-md w-full shadow-sm border border-gray-100">
                <h1 className="text-3xl font-black uppercase tracking-tighter mb-2 text-center">Login</h1>
                <p className="text-gray-500 text-sm mb-8 text-center text-balance">Welcome back! Please enter your details.</p>

                <form onSubmit={handleLogin} className="space-y-4 mb-6">
                    <div>
                        <label className="block text-sm font-bold uppercase tracking-wider mb-2" htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            required
                            className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-bold uppercase tracking-wider mb-2" htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            required
                            className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-primary hover:bg-orange-600 text-white font-bold py-3 uppercase tracking-widest text-sm transition-colors mt-4"
                    >
                        Sign In
                    </button>
                </form>

                <div className="relative flex items-center justify-center my-6">
                    <span className="absolute bg-white px-2 text-xs text-gray-500 font-bold uppercase tracking-wider z-10">Or continue with</span>
                    <div className="w-full border-t border-gray-200"></div>
                </div>

                <div className="flex justify-center mb-6">
                    <GoogleLogin
                        onSuccess={handleGoogleSuccess}
                        onError={() => {
                            console.log('Login Failed');
                        }}
                        theme="filled_black"
                        shape="rectangular"
                        size="large"
                        text="signin_with"
                    />
                </div>

                <p className="text-center text-sm text-gray-600 mt-8">
                    Don't have an account?{' '}
                    <Link to="/signup" className="font-bold text-primary hover:underline transition-all">Sign up</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
