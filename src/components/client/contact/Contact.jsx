import { useRef } from "react";

function Contact() {
	const inputRef = useRef("");
	return (
		<div className="w-full h-screen flex justify-center items-center">
			<input className="border-2" type="text" ref={inputRef} />
			<button onClick={() => (inputRef.current.value = "alskd;")}>click</button>
		</div>
	);
}

export default Contact;
