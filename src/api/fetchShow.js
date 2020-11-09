import axios from "axios";

export const fetchShow = () => {
	return axios
		.get("https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes")
		.then(res => {
			console.log(res);
			return res;
		})
		.catch(err => {
			console.log(err.message);
			return err;
		});
};

// export const API = "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes";
// export const fetchShow = async () => {
// 	return await axios.get(API);
// }