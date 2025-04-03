// npm i @uiw/react-color

import { Slider, Sketch, Material, Colorful, Compact, Circle, Wheel, Block, Github, Chrome } from '@uiw/react-color';
import { Alpha, Hue, ShadeSlider, Saturation, Interactive, hsvaToHslaString } from '@uiw/react-color';
import { EditableInput, EditableInputRGBA, EditableInputHSLA } from '@uiw/react-color';

function Demo() {
    const [hex, setHex] = useState("#fff");
    return (
      <Sketch
        style={{ marginLeft: 20 }}
        color={hex}
        onChange={(color) => {
          setHex(color.hex);
        }}
      />
    );
  }

//   Support dark/night Theme
// [data-color-mode*='dark'] .w-color-sketch {
//   --sketch-background: #323232 !important;
// }

// [data-color-mode*='dark'] .w-color-swatch {
//   --sketch-swatch-border-top: 1px solid #525252 !important;
// }

// [data-color-mode*='dark'] .w-color-block {
//   --block-background-color: #323232 !important;
//   --block-box-shadow: rgb(0 0 0 / 10%) 0 1px !important;
// }

// [data-color-mode*='dark'] .w-color-editable-input {
//   --editable-input-label-color: #757575 !important;
//   --editable-input-box-shadow: #616161 0px 0px 0px 1px inset !important;
//   --editable-input-color: #bbb !important;
// }

// [data-color-mode*='dark'] .w-color-github {
//   --github-border: 1px solid rgba(0, 0, 0, 0.2) !important;
//   --github-background-color: #323232 !important;
//   --github-box-shadow: rgb(0 0 0 / 15%) 0px 3px 12px !important;
//   --github-arrow-border-color: rgba(0, 0, 0, 0.15) !important;
// }

// [data-color-mode*='dark'] .w-color-compact {
//   --compact-background-color: #323232 !important;
// }

// [data-color-mode*='dark'] .w-color-material {
//   --material-background-color: #323232 !important;
//   --material-border-bottom-color: #707070 !important;
// }

// [data-color-mode*='dark'] .w-color-alpha {
//   --alpha-pointer-background-color: #6a6a6a !important;
//   --alpha-pointer-box-shadow: rgb(0 0 0 / 37%) 0px 1px 4px 0px !important;
// }