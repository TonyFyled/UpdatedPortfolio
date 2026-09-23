/**
 * Adedamola Falade — Portfolio Images Data
 * 
 * Loaded directly from assets/images/
 * All 22 graphic design images with unconstrained dimensions in a 3-column architecture.
 */

var PORTFOLIO_IMAGES = [
  {
    id: "work-1",
    image: "assets/images/PRED.jpg",
    alt: "Adedamola Falade Graphic Design — PRED"
  },
  {
    id: "work-2",
    image: "assets/images/0a1d12f7a01d18f9c45bc9c2cd4113e6.webp",
    alt: "Adedamola Falade Graphic Design 2"
  },
  {
    id: "work-3",
    image: "assets/images/Copy%20of%20Pre-IPO%20Stocks%20On-Chain%20Powered%20by%20Injective.png",
    alt: "Adedamola Falade Graphic Design — Pre-IPO Stocks On-Chain"
  },
  {
    id: "work-4",
    image: "assets/images/Go%20Icognito%20with%20Bungee.jpg",
    alt: "Adedamola Falade Graphic Design — Go Incognito with Bungee"
  },
  {
    id: "work-5",
    image: "assets/images/15f349eec95f824f1c998cf8211e7f4f.webp",
    alt: "Adedamola Falade Graphic Design 5"
  },
  {
    id: "work-6",
    image: "assets/images/Add%20a%20heading.png",
    alt: "Adedamola Falade Graphic Design Visual 6"
  },
  {
    id: "work-7",
    image: "assets/images/PRED%20(1).jpg",
    alt: "Adedamola Falade Graphic Design — PRED Series 1"
  },
  {
    id: "work-8",
    image: "assets/images/3bb67be9956c009fc95c45ef5968286b.webp",
    alt: "Adedamola Falade Graphic Design 8"
  },
  {
    id: "work-9",
    image: "assets/images/The%20Market%20is%20always%20open.png",
    alt: "Adedamola Falade Graphic Design — The Market is Always Open"
  },
  {
    id: "work-10",
    image: "assets/images/Go%20Icognito%20with%20Bungee%20(1).jpg",
    alt: "Adedamola Falade Graphic Design — Bungee Series 1"
  },
  {
    id: "work-11",
    image: "assets/images/asian.png",
    alt: "Adedamola Falade Graphic Design — Asian Concept"
  },
  {
    id: "work-12",
    image: "assets/images/464f0dab732b40ea0161d8506bec6087.webp",
    alt: "Adedamola Falade Graphic Design 12"
  },
  {
    id: "work-13",
    image: "assets/images/Bitcoin%20Trading,%20SIMPLIFIED.png",
    alt: "Adedamola Falade Graphic Design — Bitcoin Trading Simplified"
  },
  {
    id: "work-14",
    image: "assets/images/PRED%20(2).jpg",
    alt: "Adedamola Falade Graphic Design — PRED Series 2"
  },
  {
    id: "work-15",
    image: "assets/images/653cc60ceb3fbe1c82532377059fd81f.webp",
    alt: "Adedamola Falade Graphic Design 15"
  },
  {
    id: "work-16",
    image: "assets/images/Your%20paragraph%20text.png",
    alt: "Adedamola Falade Graphic Design Composition 16"
  },
  {
    id: "work-17",
    image: "assets/images/Go%20Icognito%20with%20Bungee%20(2).jpg",
    alt: "Adedamola Falade Graphic Design — Bungee Series 2"
  },
  {
    id: "work-18",
    image: "assets/images/73690696598054f2ec14acbc6142166c.webp",
    alt: "Adedamola Falade Graphic Design 18"
  },
  {
    id: "work-19",
    image: "assets/images/939bf66ca2252242c469cdfa9e6a5192.webp",
    alt: "Adedamola Falade Graphic Design 19"
  },
  {
    id: "work-20",
    image: "assets/images/94c866b6fa7f1c31d21fd8a0011442fb.webp",
    alt: "Adedamola Falade Graphic Design 20"
  },
  {
    id: "work-21",
    image: "assets/images/fb3c87ea122cc5a06303cec0fd9e82fd.webp",
    alt: "Adedamola Falade Graphic Design 21"
  },
  {
    id: "work-22",
    image: "assets/images/still-e96b060a86d4601a16445e0a4283d39a.webp",
    alt: "Adedamola Falade Graphic Design 22"
  }
];

// Explicitly bind to window for cross-browser reliability
if (typeof window !== 'undefined') {
  window.PORTFOLIO_IMAGES = PORTFOLIO_IMAGES;
  window.PORTFOLIO_PROJECTS = PORTFOLIO_IMAGES;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PORTFOLIO_IMAGES };
}
