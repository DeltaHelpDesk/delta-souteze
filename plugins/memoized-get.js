import memoize from 'promise-memoize';
import axios from 'axios/index';

export default memoize(axios.get, {maxAge: 3600000}); // cache for hour
