import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AlertSuccess = () => {
        toast.success('Welcome!', {
        position: "top-center",
        autoClose: 3500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        })
}

export function AlertError(msg) {
    toast.error(msg, {
        position: "top-center",
        autoClose: 3500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
}

