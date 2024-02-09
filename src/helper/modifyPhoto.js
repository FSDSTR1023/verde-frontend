
export const modifyPhoto = (urlPhoto = '', h, w = 350, q = 'auto:low', f = 'auto') => {

    const array = urlPhoto.split('/');

    array[array.length - 2] = h ? `h_${h}/q_${q}/f_${f}` : `w_${w}/q_${q}/f_${f}`;

    return array.join('/');

}
