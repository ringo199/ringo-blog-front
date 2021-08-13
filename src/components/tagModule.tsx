import React, { FC } from 'react';
import { Tag } from 'antd';
import { ITagConfig } from '../interface/ipage/igamepage';

const TagModule: FC<ITagConfig> = (props) => (
  <div className="tagModule">
    {props.list.map((item, key) => (
      <Tag color="magenta" key={key} >{item}</Tag>
    ))}
  </div>
)

export default TagModule;
