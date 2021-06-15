import { addSongToQueue as addToQueueMock } from "./mocks/addSongToQueue.js";

export function addSongToQueue(songId) {
	return addToQueueMock(songId);
}
