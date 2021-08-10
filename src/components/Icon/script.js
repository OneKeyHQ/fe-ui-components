const fs = require('fs');
const path = require('path');
const prettier = require('prettier');
const lodash = require('lodash');

const dirs = fs.readdirSync(path.resolve(__dirname, './files'));

const pascalCase = str => lodash.camelCase(str).replace(/^(.)/, lodash.toUpper);

const boilerPlate = (name, file, dir) => `
import React, { FC, HTMLAttributes } from "react";
import { ReactSVG } from "react-svg";

import ${name}Svg from '../files/${dir}/${file}';

export type ${name}SvgProps = {
  /**
   * 传入组件中的 class 样式名字
   */
  className?: string;
  /**
   * 图标大小
   */
  size?: number;
  /**
   * 图标填充颜色（注：未设置时同时继承自父元素 color 属性）
   */
  color?: string;
} & Pick<HTMLAttributes<HTMLDivElement>, "onClick">;

const defaultProps = {
  size: 24,
} as const;

const ${name}: FC<${name}SvgProps> = ({ className, color, size, ...rest }) => {

  return (
    // @ts-expect-error
    <ReactSVG
      className={className}
      wrapper="div"
      src={${name}Svg}
      beforeInjection={(svg) => {
        svg.setAttribute("width", \`\${size}px\`);
        svg.setAttribute("height", \`\${size}px\`);
        if (color) {
          svg.setAttribute("color", color);
        }
      }}
      {...rest}
    />
  );
};

${name}.defaultProps = defaultProps;

export default ${name};

`;

const items = [];

dirs.forEach(dir => {
  const files = fs.readdirSync(path.resolve(__dirname, `./files/${dir}`));
  files.forEach(file => {
    const name = `${file.replace('.svg', '')}-${dir}`.toUpperCase();
    const componentName = pascalCase(name);
    items.push(name);
    const template = boilerPlate(componentName, file, dir);
    fs.writeFileSync(path.resolve(__dirname, `./react/${componentName}.tsx`), prettier.format(template, { parser: 'typescript' }), 'utf8')
  });
});

const typesTemplate = `
/* eslint-disable */

  ${items.map(item => {
  const componentName = pascalCase(item);
  return `import ${componentName} from './react/${componentName}';`
}).join('\n')}

export type ICON_NAMES = ${items.map(item => `"${item}"`).join(' | ')};

  export default {
    ${items.map(item => {
  const componentName = pascalCase(item);
  return `"${item}": ${componentName}`
}).join(',')}
  }


`;
fs.writeFileSync(path.resolve(__dirname, `./Icons.tsx`), prettier.format(typesTemplate, { parser: 'typescript' }), 'utf8')
