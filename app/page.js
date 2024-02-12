"use client"

import { useState } from "react";

export default function Home() {
	const [text, setText] = useState(0);

	const texts = [
		"Are you sure?",
		"Really sure?",
		"Pookie please",
		"Don't do this to me",
		"I'm gonna cry...",
		"You're breaking my heart ;("
	];

	const handleYes = () => {
		const question = document.getElementById("question");
		const answers = document.getElementById("answers");
		const image = document.getElementById("image");
		image.src = "/kissing.gif";
		question.innerHTML = "Ok yay!!!";
		answers.style.display = "none";
	}

	const handleNo = () => {
		const yes = document.getElementById("yes");
		const no = document.getElementById("no");
		const currentFontSize = parseFloat(window.getComputedStyle(yes).fontSize);
		// Increase the font size by 50%
		const newFontSize = currentFontSize * 1.5;
		// Apply the new font size to the element
		yes.style.fontSize = `${newFontSize}px`;
		yes.style.lineHeight = "normal";
		
		console.log(text, texts.length);

		if(text < texts.length - 1) setText(text => text + 1);
		else setText(0);
		no.innerHTML = texts[text];
	}

	return (
		<main className="flex flex-col items-center justify-center h-screen">
			<img id="image" src="/waiting.gif" className="h-52" />
			<h1 id="question" className="font-semibold m-5 text-2xl">Will you be my valentine?</h1>
			<div id="answers">
				<button onClick={handleYes} id="yes" className="relative z-10 bg-green-400 px-3 py-1 text-xl font-medium border-2 border-black transition-all hover:brightness-125">Yes</button>
				<button onClick={handleNo} id="no" className="relative z-0 bg-red-400 px-3 py-1 text-xl font-medium border-2 border-black transition-all hover:brightness-125 ml-2">No</button>
			</div>
		</main>
	);
}


