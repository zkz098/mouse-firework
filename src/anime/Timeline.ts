import Anime from "./Anime";
import type { AnimeOptions } from "./types";

export default class Timeline {
  queue: Anime[] = [];

  add(options?: AnimeOptions) {
    this.queue.push(new Anime(options));
    return this;
  }

  play() {
    this.queue.forEach((instance) => instance.play());
  }
}
