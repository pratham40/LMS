import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import axiosInstance from '../Helpers/axiosInstance';
import { useDispatch } from 'react-redux';
import { login } from '../Redux/Slices/AuthSlice';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const GoogleLoginComponent = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSuccess = async (response) => {
        try {
            const credential = response.credential;
            const res = await dispatch(login({ tokenId: credential }));
            if (res.payload.success) {
                toast.success('Login successful!');
                navigate('/');
            } else {
                toast.error('Login failed!');
            }
        } catch (error) {
            toast.error('Login failed!');
        }
    };

    const handleError = () => {
        toast.error('Login failed!');
    };

    return (
        <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
            <GoogleLogin
                onSuccess={handleSuccess}
                onError={handleError}
            />
        </GoogleOAuthProvider>
    );
};

export default GoogleLoginComponent;