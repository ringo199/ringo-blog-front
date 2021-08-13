import React, { FC } from 'react';
import { Button } from 'antd';
import { IFuncConfig } from '../interface/ipage/igamepage';

const FuncModule: FC<IFuncConfig> = (props) => (
  <div className="funcModule">
    {props.list.map((item, key) => (
      <Button type="link" key={key}>{item}</Button>
    ))}
  </div>
)

export default FuncModule;
