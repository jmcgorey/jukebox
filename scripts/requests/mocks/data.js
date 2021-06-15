const songQueue = [];
const playedSongs = [];

export function getQueue() {
	return songQueue;
}

export function addSongToQueue(song) {
	songQueue.push(song);
}

export function removeSongFromQueue(songId) {
	const indexOfSong = sonQueue.findIndex((song) => song.id === songId);
	if (indexOfSong === -1) return;

	songQueue.splice(indexOfSong, 1);
}

export function getPlayedSongs() {
	return playedSongs();
}

export function addSongToPlayedSongs(song) {
	playedSongs.push(playedSongs);
}
