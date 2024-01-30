import { useState } from "react";
import Slider from "./Slider";
const array = [
	{
		tittle: "jasdlkf",
		description: "lkasdjflkajfdl lkjljdfa lkkjlajfdddfsf kljl",
	},
	{
		tittle: "erererer",
		description: "jkuejjhkjhf jhkadfhf hkjhdf hkh hkj hkh dssadf",
	},
	{
		tittle: "kljhl;kj;",
		description: "jkuejjhkjhf jhkadfhf hkjhdf hkh hkj hkh dssadf",
	},
	{
		tittle: "qwerqwer",
		description: "jkuejjhkjhf jhkadfhf hkjhdf hkh hkj hkh dssadf",
	},
];
function Banner() {
	const [currentIndex, setCurrentIndex] = useState(0);
	return (
		<div className="w-full h-screen flex justify-center items-center">
			<div className="w-[50%] flex justify-center items-center">
				<Slider
					tittle={array[currentIndex].tittle}
					description={array[currentIndex].description}
					setCurrentIndex={setCurrentIndex}
					currentIndex={currentIndex}
					maxIndex={array.length}
				/>
			</div>
		</div>
	);
}

export default Banner;
