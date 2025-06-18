import React, { ReactNode, useContext, MouseEventHandler } from 'react';
import './index.less';
import cs from 'classnames';
import { ConfigContext } from '../ConfigProvider';

interface ButtonProps {
  type?: 'highlight' | 'default' | 'primary' | 'danger' | 'ghost' | 'link' | 'text';
  size?: 'large' | 'default' | 'small';
  disabled?: boolean;
  icon?: ReactNode;
  text?: string;
  children?: ReactNode;
  className?: string;
  style?: object;
  ordertype?: number;
  onClick?: MouseEventHandler<HTMLDivElement>;
  withBg?: boolean;
}

export default (props: ButtonProps) => {
  const {
    type,
    size,
    disabled,
    icon,
    text,
    children,
    className,
    style,
    onClick,
    ordertype,
    withBg,
  } = props;
  // const prefix = 'cube'
  const { prefix } = useContext(ConfigContext);
  const btnPrefix = prefix + '-btn';
  const classes = cs(
    btnPrefix,
    {
      [`${btnPrefix}-highlight`]: type === 'highlight',
      [`${btnPrefix}-primary`]: type === 'primary',
      [`${btnPrefix}-danger`]: type === 'danger',
      [`${btnPrefix}-ghost`]: type === 'ghost',
      [`${btnPrefix}-link`]: type === 'link',
      [`${btnPrefix}-text`]: type === 'text',
      [`${btnPrefix}-disabled`]: disabled,
      [`${btnPrefix}-with-bg`]: withBg,
      [`${btnPrefix}-${size}`]: size && size !== 'default',
    },
    className,
  );

  const getTextByOrderType = () => {
    if (ordertype === 1) {
      return '已完成';
    }
    if (ordertype === 2) {
      return '已超时';
    }
    return '未完成';
  };

  return (
    <div
      className={classes}
      style={style}
      onClick={(e) => {
        if (disabled) {
          return;
        }
        onClick && onClick(e);
      }}
    >
      {icon}
      {text}
      {/* {getTextByOrderType()} */}
      {children}
    </div>
  );
};
