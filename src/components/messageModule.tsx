import React, { FC } from 'react';
import { message } from 'antd';
import { IGlobal, IMessage } from '../interface/iconfig';

const showMessage = (msgQueue: IMessage[]) => {
  if (msgQueue.length === 0) return
  message.error(msgQueue.shift())
}

const MessageModule: FC<IGlobal> = (props) => (
  <>
    {showMessage(props.message)}
  </>
)

export default MessageModule;
