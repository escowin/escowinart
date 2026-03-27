import lcpWebp from "./assets/img/fine-art/edwin-escobar-set-002.webp?url";

const link = document.createElement("link");
link.rel = "preload";
link.as = "image";
link.href = lcpWebp;
link.type = "image/webp";
link.setAttribute("fetchpriority", "high");
document.head.appendChild(link);
