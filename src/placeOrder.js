import axios from "axios";

const placeOrder = () => {
	const time = Date.now();
	axios({
	    method: "post",
	    url: "http://127.0.0.1:5000/placeOrder",
	    data: JSON.stringify({'timestamp': time, 'item': 'cookies'}),
	    headers: { "Content-Type": "application/json" },
	  })
	    .catch(function (r) {
	      console.log(r);
	    });
	return;
};
export default placeOrder;
