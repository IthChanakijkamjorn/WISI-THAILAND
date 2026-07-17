export const products = [
  // Headend & Processing
  {
    id: "hp-1",
    name: "Compact Headend Controller",
    model: "WISI OX 410 A",
    category: "Headend & Processing",
    shortDescription: "Modular headend platform for SMATV and MATV systems. Supports DVB-S/S2 input with CI slot for conditional access.",
  },
  {
    id: "hp-2",
    name: "DVB-S2 to DVB-T Transcoder",
    model: "WISI OX 510 B",
    category: "Headend & Processing",
    shortDescription: "Single-channel transcoder converting satellite signals to DVB-T for local distribution over coaxial cable networks.",
  },
  {
    id: "hp-3",
    name: "IP Streaming Gateway",
    model: "WISI OX 620 G",
    category: "Headend & Processing",
    shortDescription: "Multi-channel IP gateway delivering IPTV streams over existing LAN/WAN infrastructure. Ideal for hospitality and MDU environments.",
  },

  // Signal Distribution
  {
    id: "sd-1",
    name: "Wideband Trunk Amplifier",
    model: "WISI VX 4220",
    category: "Signal Distribution",
    shortDescription: "High-gain trunk amplifier for coaxial distribution networks. Covers 5–1000 MHz with automatic gain control.",
  },
  {
    id: "sd-2",
    name: "4-Way Splitter (5–1000 MHz)",
    model: "WISI DW 04",
    category: "Signal Distribution",
    shortDescription: "Passive 4-way splitter designed for broadband signal distribution. Low insertion loss and excellent return loss across full band.",
  },
  {
    id: "sd-3",
    name: "Tap-Off Unit 8-Way",
    model: "WISI DW 8T",
    category: "Signal Distribution",
    shortDescription: "In-line tap for distributing signals to multiple outlets without interrupting the main trunk signal path.",
  },

  // Fibre Optic Solutions
  {
    id: "fo-1",
    name: "RF over Fibre Transmitter",
    model: "WISI OF 100 T",
    category: "Fibre Optic Solutions",
    shortDescription: "Converts broadband RF signals to optical format for long-distance transmission with minimal signal degradation.",
  },
  {
    id: "fo-2",
    name: "RF over Fibre Receiver",
    model: "WISI OF 100 R",
    category: "Fibre Optic Solutions",
    shortDescription: "Optical receiver converting fibre-carried RF signals back to electrical. Pairs with OF 100 T for complete optical link.",
  },
  {
    id: "fo-3",
    name: "Optical Node for HFC Networks",
    model: "WISI OF 210 N",
    category: "Fibre Optic Solutions",
    shortDescription: "Fibre-to-coax optical node for hybrid fibre-coaxial (HFC) infrastructure. Supports forward and return path signals.",
  },

  // Accessories & Modules
  {
    id: "ac-1",
    name: "Common Interface (CI) Module",
    model: "WISI CI 01",
    category: "Accessories & Modules",
    shortDescription: "CAM-compatible CI module for conditional access integration in WISI headend chassis.",
  },
  {
    id: "ac-2",
    name: "Power Supply Unit 12V/5A",
    model: "WISI PS 12-5",
    category: "Accessories & Modules",
    shortDescription: "Regulated 12V DC power supply for WISI active distribution and amplifier components. DIN-rail mountable.",
  },
  {
    id: "ac-3",
    name: "Rack Mount Chassis (19\")",
    model: "WISI CH 19-4U",
    category: "Accessories & Modules",
    shortDescription: "19-inch 4U rack chassis for mounting WISI modular headend and processing units. Up to 12 module slots.",
  },
];

export const categories = [
  "Headend & Processing",
  "Signal Distribution",
  "Fibre Optic Solutions",
  "Accessories & Modules",
];
