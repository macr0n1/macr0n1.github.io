"use client"

import { useState } from "react";

export default function Home() {
	const [text, setText] = useState(0);

	const texts = [
		"ты уверена?",
		"правда уверена?",
		"котик, пожалуйста",
		"не делай этого со мной",
		"я сейчас заплачу...",
		"ты разбиваешь мне сердце ;(",
		"я не могу в это поверить",
		"пожалуйста, передумай!",
		"я умоляю тебя",
		"это шутка?",
		"я чувствую себя преданным",
		"этого не может быть",
		"я никогда не думал...",
		"я опустошен",
		"зачем ты это делаешь?",
];

	const handleYes = () => {
		const question = document.getElementById("question");
		const answers = document.getElementById("answers");
		const image = document.getElementById("image");
		image.src = "/kissing.gif";
		question.innerHTML = "ура!!!";
		answers.style.display = "none";
	}

	const handleNo = () => {
		const yes = document.getElementById("yes");
		const no = document.getElementById("no");
		const currentFontSize = parseFloat(window.getComputedStyle(yes).fontSize);
		const newFontSize = currentFontSize * 1.5;
		yes.style.fontSize = `${newFontSize}px`;
		yes.style.lineHeight = "normal";

		if(text < texts.length - 1) setText(text => text + 1);
		else setText(0);
		no.innerHTML = texts[text];
	}

	return (
		<main className="flex flex-col items-center justify-center h-screen">
			<img id="image" src="/waiting.gif" alt="macr0n" className="h-52 m-5" />
			<h1 id="question" className="font-semibold text-2xl">ты будешь моей валентинкой?</h1>
			<div id="answers" className="text-center">
				<button onClick={handleYes} id="yes" className="relative z-10 bg-green-500 px-3 py-1 text-xl text-white font-medium rounded-sm transition-all hover:brightness-125 mt-5">да</button>
				<button onClick={handleNo} id="no" className="relative z-0 bg-red-500 px-3 py-1 text-xl text-white font-medium rounded-sm transition-all hover:brightness-125 m-5">нет</button>
			</div>
		</main>
	);
}


