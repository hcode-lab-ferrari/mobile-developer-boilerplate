import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export function FacebookSvg(props: SvgProps) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <Path
        d="M20.321.002H3.165A3.164 3.164 0 000 3.166v17.157a3.166 3.166 0 003.165 3.165h8.461l.014-8.392H9.46a.515.515 0 01-.514-.514l-.011-2.705a.515.515 0 01.515-.516h2.176V8.747c0-3.034 1.853-4.685 4.559-4.685h2.221a.515.515 0 01.514.514v2.28a.514.514 0 01-.514.515h-1.363c-1.472 0-1.756.7-1.756 1.725v2.263h3.233a.514.514 0 01.511.575l-.32 2.706a.516.516 0 01-.511.454h-2.9l-.013 8.392h5.034a3.165 3.165 0 003.165-3.165V3.164A3.165 3.165 0 0020.321 0"
        fill="#999"
      />
    </Svg>
  );
}