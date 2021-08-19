import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Divider, Icon } from '../components'
import { Typography, Text, Link, Heading, Paragraph } from '../components/Typography';
import ConfigBar from './Base';


export default {
  title: 'UI/Typography',
} as ComponentMeta<typeof Typography>;

const blockContent = `OneKeyV 是 OneKey 全新一代数据可视化解决方案，致力于提供一套简单方便、专业可靠、不限可能的数据可视化最佳实践。得益于丰富的业务场景和用户需求挑战，OneKeyV 经历多年积累与不断打磨，已支撑整个阿里集团内外 20000+ 业务系统，通过了日均千万级 UV 产品的严苛考验。
我们正在基础图表，图分析，图编辑，地理空间可视化，智能可视化等各个可视化的领域耕耘，欢迎同路人一起前行。`;

export const Default: ComponentStory<typeof Typography> = () => <Typography>
  <Heading level={1}>Introduction</Heading>
  <Paragraph>
    In the process of internal desktop applications development, many different design specs and
    implementations would be involved, which might cause designers and developers difficulties and
    duplication and reduce the efficiency of development.
  </Paragraph>
  <Paragraph>
    After massive project practice and summaries, OneKey Design, a design language for background
    applications, is refined by OneKey UED Team, which aims to{' '}
    <Text strong>
      uniform the user interface specs for internal background projects, lower the unnecessary
      cost of design differences and implementation and liberate the resources of design and
      front-end development
    </Text>.
  </Paragraph>
  <Heading>Guidelines and Resources</Heading>
  <Paragraph>
    We supply a series of design principles, practical patterns and high quality design resources
    (<Text code>Figma</Text>), to help people create their product
    prototypes beautifully and efficiently.
  </Paragraph>

  <Paragraph>
    <ul>
      <li>
        <Link>Principles</Link>
      </li>
      <li>
        <Link>Patterns</Link>
      </li>
      <li>
        <Link><Text underline>Download</Text> our Resource</Link>
      </li>
    </ul>
  </Paragraph>

  <Paragraph>
    Press <Text keyboard>Esc</Text> to exit...
  </Paragraph>

  <Divider />

  <Heading>介绍</Heading>
  <Paragraph>
    蚂蚁的企业级产品是一个庞大且复杂的体系。这类产品不仅量级巨大且功能复杂，而且变动和并发频繁，常常需要设计与开发能够快速的做出响应。同时这类产品中有存在很多类似的页面以及组件，可以通过抽象得到一些稳定且高复用性的内容。
  </Paragraph>
  <Paragraph>
    随着商业化的趋势，越来越多的企业级产品对更好的用户体验有了进一步的要求。带着这样的一个终极目标，我们（蚂蚁金服体验技术部）经过大量的项目实践和总结，逐步打磨出一个服务于企业级产品的设计体系
    OneKey Design。基于<Text mark>『确定』和『自然』</Text>
    的设计价值观，通过模块化的解决方案，降低冗余的生产成本，让设计者专注于
    <Text strong>更好的用户体验</Text>。
  </Paragraph>
  <Heading>设计资源</Heading>
  <Paragraph>
    我们提供完善的设计原则、最佳实践和设计资源文件（<Text code>Figma</Text>），来帮助业务快速设计出高质量的产品原型。
  </Paragraph>

  <Paragraph>
    <ul>
      <li>
        <Link>设计原则</Link>
      </li>
      <li>
        <Link>设计模式</Link>
      </li>
      <li>
        <Link><Text underline>下载</Text>我们的设计资源</Link>
      </li>
    </ul>
  </Paragraph>

  <Paragraph>
    <blockquote>{blockContent}</blockquote>
    <pre>{blockContent}</pre>
  </Paragraph>

  <Paragraph>
    按<Text keyboard>Esc</Text>键退出阅读……
  </Paragraph>
</Typography>
  ;

export const TextDemo = () => <Text>A single text is sitting here</Text>

export const LinkDemo = () => (
  <>
    <Link>A link is sitting here</Link>
  </>
)

type HeadingSize = [1, 2, 3, 4, 5, 6]

const LEVEL_TEXTS: Record<HeadingSize[number], string> = {
  1: 'The quick brown fox jumped over the lazy dog. // level=1 同 text-2xl',
  2: 'The quick brown fox jumped over the lazy dog.  // level=2 同 text-xl，默认值',
  3: 'The quick brown fox jumped over the lazy dog.  // level=3 同 text-lg',
  4: 'The quick brown fox jumped over the lazy dog.  // level=4 同 text-base',
  5: 'The quick brown fox jumped over the lazy dog.  // level=5 同 text-sm',
  6: 'The quick brown fox jumped over the lazy dog.  // level=6 同 text-xs',
}

export const HeadingDemo = () => {
  const levels = [1, 2, 3, 4, 5, 6] as const

  return (
    <div className="okd-bg-gray-50 okd-p-4">
      <ConfigBar />
      <Heading color="black" level={1}>Default as h2 element</Heading>
      <Heading>H2</Heading>

      <Divider />

      <Heading color="black" level={1}>展示不同级别的标题。</Heading>
      {levels.map((level) =>
        <Heading level={level} key={level}>{LEVEL_TEXTS[level]}</Heading>
      )}

      <Divider />

      <Heading color="black" level={1}>展示与其他组件组合</Heading>
      <Heading color="black" level={2}>Card:</Heading>
      <div className="okd-border okd-ring-1 okd-ring-black okd-ring-opacity-5 okd-shadow-xl okd-rounded-lg">
        <div className="okd-flex okd-items-center okd-justify-between okd-pt-3 okd--m-1 okd-px-4">
          <Heading className="okd-text-chain-btc">一个 Card 的标题 Header of a Card</Heading>
          <Icon name="x-outline" className="dark:okd-text-gray-50 okd-text-gray-400" />
        </div>
        <Divider />
        <div className="okd-pb-4 okd-pt-1 okd-px-4">
          <Paragraph>
            <Text weight="bold">Detach instance to use.</Text> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio porta risus nec, cursus faucibus libero dolor integer. Cursus sagittis, tempus ut cum cursus gravida suspendisse tristique nunc.
          </Paragraph>
        </div>
      </div>
    </div>
  )
}
