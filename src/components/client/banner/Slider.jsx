function Slider({
	currentIndex,
	setCurrentIndex,
	maxIndex,
	tittle,
	description,
}) {
	function nextSlider() {
		currentIndex === maxIndex - 1
			? setCurrentIndex(0)
			: setCurrentIndex(currentIndex + 1);
	}
	return (
		<div
			onClick={() => nextSlider()}
			className="cursor-pointer border border-black p-10"
		>
			<h1>{tittle}</h1>
			<p>{description}</p>
		</div>
	);
}

export default Slider;
