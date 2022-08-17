import axios from 'axios';

const base_uri = 'https://simple-key-crypt-api.herokuapp.com/api';

export default {
    sendCrypt(callback, key, text) {

        axios.post(`${base_uri}/crypt`, {
            key: key,
	        text: text,
	        remove_spaces: true,
	        remove_punctation: true
          })
          .then(function (response) {
            if (callback) {
                callback(response)
            }
          })
          .catch(function (error) {
            console.error(error);
          });
    }
}
