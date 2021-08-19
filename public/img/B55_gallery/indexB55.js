import media1 from "./1.jpg";
import media2 from "./2.jpg";
import media3 from "./3.jpg";
import media4 from "./4.jpg";
import media5 from "./5.jpg";
import media6 from "./6.jpg";

export const mediaB55 = [media1, media2, media3, media4, media5, media6];
export const mediaByIndexB55 = index => mediaB55[index % mediaB55.length];
