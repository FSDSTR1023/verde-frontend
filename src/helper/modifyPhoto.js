
export const modifyPhoto = (urlPhoto = '', h, w = 350, q = 'auto:low', f = 'auto') => {

    const array = urlPhoto.split('/');

    array[array.length - 2] = h ? `h_${h}/q_${q}/f_${f}` : `w_${w}/q_${q}/f_${f}`;

    const finalURL = array.join('/');

    return finalURL;

}

export const toClient = (urlPhoto = '') => {
    // https://res.cloudinary.com/ddre5ln9t/image/upload/l_ofub5oumcfojoxyaenkc/e_anti_removal,fl_layer_apply/cld-sample.jpg

    const array = urlPhoto.split('/');

    array[array.length - 2] = "l_ofub5oumcfojoxyaenkc/e_anti_removal,fl_layer_apply/"

    const finalURL = array.join('/');

    return finalURL;
}