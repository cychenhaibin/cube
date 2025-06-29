import React, { ReactNode, useRef, useLayoutEffect, useState } from 'react';
import './index.less';
import { Select } from 'cube';
import { DownOutlined } from '@ant-design/icons';

export interface BreadcrumbItem {
  label: ReactNode;
  icon?: ReactNode;
  href?: string;
  menu?: { label: ReactNode; href?: string }[];
  params?: Record<string, any>;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  separator?: ReactNode;
  customSeparators?: ReactNode[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, separator = '/', customSeparators }) => {
  return (
    <nav className="cube-breadcrumb">
      {items.map((item, idx) => {
        let selectWidth = 0;
        const spanRef = useRef<HTMLSpanElement>(null);
        const [width, setWidth] = useState(0);

        useLayoutEffect(() => {
          if (spanRef.current) {
            setWidth(spanRef.current.offsetWidth + 8); // 额外加点padding
          }
        }, [item.label]);

        const options = (item.menu || []).map((menuItem, i) => ({
          label: menuItem.label,
          value: String(menuItem.label),
          href: menuItem.href,
        }));

        // const currentValue = String(
        //   (item.menu || []).findIndex(menuItem => menuItem.label === item.label)
        // );

        const content = (
          <>
            {item.icon && <span className="cube-breadcrumb-icon">{item.icon}</span>}
            {item.menu && item.menu.length > 0 ? (
              <span className="cube-breadcrumb-dropdown" style={{ position: 'relative' }}>
                <span
                  ref={spanRef}
                  style={{
                    position: 'absolute',
                    visibility: 'hidden',
                    whiteSpace: 'pre',
                    fontSize: 16,
                    fontFamily: 'inherit',
                    fontWeight: 'inherit',
                  }}
                >
                  {item.label}
                </span>
                <Select
                  value={String(item.label)}
                  options={options}
                  trigger="hover"
                  onChange={val => {
                    const idx = Number(val);
                    const selected = (item.menu || [])[idx];
                    if (selected && selected.href) window.location.href = selected.href;
                  }}
                  style={{
                    width: width,
                    minWidth: 60,   // 最小宽度
                    maxWidth: 200,  // 最大宽度
                    background: 'none',
                    border: 'none'
                  }}
                />
              </span>
            ) : (
              item.href ? (
                <a href={item.href} className="cube-breadcrumb-link">{item.label}</a>
              ) : (
                <span className="cube-breadcrumb-text">{item.label}</span>
              )
            )}
          </>
        );
        return (
          <span className="cube-breadcrumb-item" key={idx}>
            {content}
            {idx < items.length - 1 && (
              customSeparators && customSeparators[idx]
                ? <span className="cube-breadcrumb-separator">{customSeparators[idx]}</span>
                : <span className="cube-breadcrumb-separator">{separator}</span>
            )}
          </span>
        );
      })}
    </nav>
  );
};

export default Breadcrumb; 