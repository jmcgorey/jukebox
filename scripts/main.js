import { getSongList } from "./requests/getSongList.js";
import { addSongToQueue } from "./requests/addSongToQueue.js";
import { getQueue } from "./requests/mocks/data.js";

async function createSongList() {
	const songs = await getSongList();

	let songsHtml = "";
	songs.forEach((s) => {
		songsHtml += `<li>
                (${s.id}) ${s.title} - ${s.title} (${s.year})
                <button class="songAddButton" data-song-id=${s.id} type="button">+</button>
            </li>`;
	});
	const songListElement = document.getElementById("songList");
	songListElement.innerHTML = songsHtml;

	const buttons = document.getElementsByClassName("songAddButton");
	const numButtons = buttons.length;
	for (let i = 0; i < numButtons; i++) {
		buttons[i].onclick = addSong;
	}
}

function addSong(e) {
	const button = e.target;
	const songId = button.dataset.songId;
	console.log(songId);

	addSongToQueue(songId);
}

createSongList();

const queueButton = document.getElementById("queueLogBtn");
queueButton.onclick = function (e) {
	console.log("Song Queue:", getQueue());
};
