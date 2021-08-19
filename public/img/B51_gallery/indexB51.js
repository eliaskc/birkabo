import media1 from "./1.jpg";
import media2 from "./2.jpg";
import media3 from "./3.jpg";
import media4 from "./4.jpg";
import media5 from "./5.jpg";

export const mediaB51 = [media1, media2, media3, media4, media5];
export const mediaByIndexB51 = index => mediaB51[index % mediaB51.length];
