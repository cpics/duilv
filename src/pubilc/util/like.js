import {
    like
} from '../../api/index';

async function likeFunc(id, callback) {
    console.log(1);
    let res = like({
        id
    });
    if (res.type == 'Success') {
        callback();
    } else {

    }
}

export default likeFunc;