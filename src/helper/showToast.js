import { toast } from 'react-toastify';

export const showToast = (response, msg) => {

    if (response.ok) {
        toast.success(msg);
    } else {
        toast.error("Algo salió mal, inténtalo de nuevo más tarde")
    }

}