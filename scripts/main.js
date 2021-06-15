import { getSongList } from "./requests/getSongList.js";
import { addSongToQueue } from "./requests/addSongToQueue.js";
import { getQueue } from "./requests/mocks/data.js";

async function createSongList() {
	// Get the list of songs
	const songs = await getSongList();

	// Create a list item for each song in the list
	let songsHtml = "";
	songs.forEach((s) => {
		songsHtml += `<li>
                (${s.id}) ${s.title} - ${s.artist} (${s.year})
                <button class="songAddButton" data-song-id=${s.id} type="button">+</button>
            </li>`;
	});
	const songListElement = document.getElementById("songList");
	songListElement.innerHTML = songsHtml;

	// Add click handlers to all of the "add song" buttons
	const buttons = document.getElementsByClassName("songAddButton");
	const numButtons = buttons.length;
	for (let i = 0; i < numButtons; i++) {
		buttons[i].onclick = function (e) {
			const button = e.target;
			const songId = button.dataset.songId;
			addSong(songId);
		};
	}
}

async function addSong(songId) {
	await addSongToQueue(songId);
	await updateSongQueue();
}

async function updateSongQueue() {
	const queue = getQueue();

	// Create a list item for each song in the queue
	let songsHtml = "";
	for (const s of queue) {
		songsHtml += `<li>(${s.id}) ${s.title} - ${s.artist} (${s.year})</li>`;
	}

	if (!songsHtml) songsHtml = "None";
	const queueList = document.getElementById("songQueue");
	queueList.innerHTML = songsHtml;
}

// Main
createSongList();
updateSongQueue();
