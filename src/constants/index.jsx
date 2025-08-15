import devLens from '../assets/logo-devlens.svg';
import styleSpy from '../assets/logo-style-spy.svg';
import speedBooster from '../assets/logo-speed-boost.svg';
import jsonWizard from '../assets/logo-json-wizard.svg';
import tabMasterPro from '../assets/logo-tab-master-pro.svg';
import viewPortBuddy from '../assets/logo-viewport-buddy.svg';
import markUpNotes from '../assets/logo-markup-notes.svg';
import gridGuides from '../assets/logo-grid-guides.svg';
import palettePicker from '../assets/logo-palette-picker.svg';
import linkChecker from '../assets/logo-link-checker.svg';
import domSnapshot from '../assets/logo-dom-snapshot.svg';
import consolePlus from '../assets/logo-console-plus.svg';


export const FILTERS = [
  { label: "All", value: "all" },
  { label: "Active", value: "active" },
  { label: "Inactive", value: "inactive" }
];


export const EXTENSION_LIST = [
  {
    id: 1,
    image: devLens,
    title: "DevLens",
    description: "Quickly inspect page layouts and visualize element boundaries.",
    isActive: false,
  },
  {
    id: 2,
    image: styleSpy,
    title: "Style Spy",
    description: "Instantly analyze and copy CSS from any webpage element.",
    isActive: false,
  },
  {
    id: 3,
    image: speedBooster,
    title: "Speed Booster",
    description: "Optimize browser rescource to optimize page load.",
    isActive: false,
  },
  {
    id: 4,
    image: jsonWizard,
    title: "JSONWizard",
    description: "Formats, validates and prettifies JSON responses in-browser.",
    isActive: false,
  },
  {
    id: 5,
    image: tabMasterPro,
    title: "TabMaster Pro",
    description: "Organizes browser tabs into groups and sessions.",
    isActive: false,
  },
  {
    id: 6,
    image: viewPortBuddy,
    title: "ViewPort Buddy",
    description: "Simulates various screen resolutions directly within the browser.",
    isActive: false,
  },
  {
    id: 7,
    image: markUpNotes,
    title: "MarkUp Notes",
    description: "Enables attonations and notes directly onto webpages for collaborative debugging.",
    isActive: false,
  },
  {
    id: 8,
    image: gridGuides,
    title: "Grid Guides",
    description: "Overlay customizable grids and alignment guides on any webpages.",
    isActive: false,
  },
  {
    id: 9,
    image: palettePicker,
    title: "Palette Picker",
    description: "Instantly extracts color palettes from any webpages.",
    isActive: false,
  },
  {
    id: 10,
    image: linkChecker,
    title: "Link Checker",
    description: "Scans and highlights broken links on any page.",
    isActive: false,
  },
  {
    id: 11,
    image: domSnapshot,
    title: "DOM Snapshot",
    description: "Capture and export DOM snapshots quicly.",
    isActive: false,
  },
  {
    id: 12,
    image: consolePlus,
    title: "Console Plus",
    description: "Enhanced developer console with advanced filtering and logging.",
    isActive: false,
  },
]

// export const remove = (index) => {
//   setExtensions(prevExtensions => prevExtensions.filter((_, i) => i !== index));
// };