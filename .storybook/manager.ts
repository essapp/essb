import { addons } from "@storybook/manager-api";
import essTheme from "./essTheme";

addons.setConfig({
  // navSize: 300,
  // bottomPanelHeight: 300,
  // rightPanelWidth: 300,
  // panelPosition: 'bottom',
  // enableShortcuts: true,
  // showToolbar: true,
  theme: essTheme,
  // selectedPanel: undefined,
  // initialActive: 'sidebar',
  // sidebar: {
  //   showRoots: false,
  //   collapsedRoots: ['other'],
  // },
  // toolbar: {
  //   title: { hidden: false },
  //   zoom: { hidden: false },
  //   eject: { hidden: false },
  //   copy: { hidden: false },
  //   fullscreen: { hidden: false },
  // },
});
