import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TagList as TagListComponent } from "../components";

export default {
  title: "UI/TagList",
  component: TagListComponent,
} as ComponentMeta<typeof TagListComponent>;

export const TagList: ComponentStory<typeof TagListComponent> = () => (
  <TagListComponent
    clickable
    tags={[
      {
        token: {
          chain: 'eth'
        },
        children: 1,
      },
      {
        token: {
          chain: 'bsc'
        },
        children: 2,
      },
      {
        token: {
          chain: 'bsc'
        },
        children: 'asdfasdfasdfasdfasdfasfs',
      }
    ]}
  />
);


export const TagListControl: ComponentStory<typeof TagListComponent> = (args) => {
  const [active, setActive] = useState(0);
  return (
    <>
      <p>current select is index {active + 1}</p>
      <TagListComponent<typeof active>
        clickable
        value={active}
        onChange={setActive}
        tags={
          [
            {
              token: {
                chain: 'eth'
              },
              children: 1,
            },
            {
              token: {
                chain: 'bsc'
              },
              children: 2,
            },
            {
              token: {
                chain: 'bsc'
              },
              children: 'asdfasdfasdfasdfasdfasfs',
            }
          ]
        }
      />
    </>
  );
}

export const TagListMultipleControl: ComponentStory<typeof TagListComponent> = (args) => {
  const [active, setActive] = useState([0, 1]);
  return (
    <>
      <p>current select is index {active.map(i => i + 1)}</p>
      <TagListComponent<typeof active>
        multi
        clickable
        value={active}
        onChange={setActive}
        tags={
          [
            {
              token: {
                chain: 'eth'
              },
              children: 1,
            },
            {
              token: {
                chain: 'bsc'
              },
              children: 2,
            },
            {
              token: {
                chain: 'bsc'
              },
              children: 'asdfasdfasdfasdfasdfasfs',
            }
          ]
        }
      />
    </>
  );
}

export const TagListMultipleRemoveControl: ComponentStory<typeof TagListComponent> = () => {
  const [tags, setTags] = useState(
    [
      {
        token: {
          chain: 'eth'
        },
        children: 1,
      },
      {
        token: {
          chain: 'bsc'
        },
        children: 2,
      },
      {
        token: {
          chain: 'bsc'
        },
        children: 'asdfasdfasdfasdfasdfasfs',
      }
    ]
  );

  return (
    <>
      <TagListComponent
        multi
        onRemove={(i, item) => {
          setTags(tags => tags.filter((item, index) => index !== i))
        }}
        tags={tags}
      />
    </>
  );
}


export const TagListMultipleClickRemoveControl: ComponentStory<typeof TagListComponent> = () => {
  const [activeIndexs, setActiveIndex] = useState([]);
  const [tags, setTags] = useState(
    [
      {
        token: {
          chain: 'eth'
        },
        children: 1,
      },
      {
        token: {
          chain: 'bsc'
        },
        children: 2,
      },
      {
        token: {
          chain: 'bsc'
        },
        children: 'asdfasdfasdfasdfasdfasfs',
      }
    ]
  );

  return (
    <>
      <p>current select is index {activeIndexs.map(i => i + 1)}</p>
      <TagListComponent<typeof activeIndexs>
        multi
        clickable
        value={activeIndexs}
        onChange={setActiveIndex}
        onRemove={(i) => {
          setTags(tags => tags.filter((_, index) => index !== i))
          setActiveIndex(prev => prev.filter((item) => item !== i))
        }}
        tags={tags}
      />
    </>
  );
}
