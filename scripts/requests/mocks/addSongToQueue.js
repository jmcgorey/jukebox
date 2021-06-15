import { addSongToQueue } from "./data.js";
import { getSongsList } from "./getSongList.js";

let songInPlayedSongs = false;
let songInQueue = false;
let canAddSongIfInQueue = true;
let canAddSongIfInPlayedSongs = true;

export function setSongInPlayedSongs(flag) {
	songInPlayedSongs = !!flag;
}

export function setSongInQueue(flag) {
	songInQueue = !!flag;
}

export function setCanAddSongIfInQueue(flag) {
	canAddSongIfInQueue = !!flag;
}

export function setCanAddSongIfInPlayedSongs(flag) {
	canAddSongIfInPlayedSongs = !!flag;
}

export async function addSongToQueue(songId) {
	const songList = await getSongsList();
	const song = songList.find((s) => s.id === songId);
	if (!song) {
		throw new Error(`Unexpected error.  A song with the id of "${songId}" could not be found.`);
	} else if (songInQueue && !canAddSongIfInQueue) {
		throw new Error("The song cannot be added because it is already in the queue.");
	} else if (songInPlayedSongs && !canAddSongIfInPlayedSongs) {
		throw new Error("The song cannot be added because it has already been played.");
	}

	addSongToQueue(song);
}
