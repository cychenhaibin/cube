import React, { useState, useRef, useEffect, ReactNode, CSSProperties } from 'react';
import './index.less';
import ReactDOM from 'react-dom';
import { Icon } from 'cube';

export type DropdownTrigger = 'click' | 'hover' | 'contextMenu';
export type DropdownPlacement = 'bottomLeft' | 'bottomRight' | 'topLeft' | 'topRight';

export interface DropdownMenuItem {
  label: ReactNode;
  key: string;
  type?: 'group'; // 新增，支持分组
  closeOnClick?: boolean;
  onClick?: (key: string) => void;
  className?: string;
  style?: CSSProperties;
  disabled?: boolean;
  children?: DropdownMenuItem[]; // 新增
}

export interface DropdownProps {
  overlay: ReactNode | (() => ReactNode) | DropdownMenuItem[];
  children: ReactNode;
  trigger?: DropdownTrigger | DropdownTrigger[];
  placement?: DropdownPlacement;
  disabled?: boolean;
  visible?: boolean;
  onVisibleChange?: (visible: boolean) => void;
  overlayClassName?: string;
  overlayStyle?: CSSProperties;
  className?: string;
  style?: CSSProperties;
  onClick?: (info: { key: string }) => void;
}

const getPopupPosition = (triggerRect: DOMRect, placement: DropdownPlacement) => {
  const style: React.CSSProperties = { position: 'absolute', zIndex: 1000 };
  const scrollX = window.scrollX || window.pageXOffset;
  const scrollY = window.scrollY || window.pageYOffset;
  switch (placement) {
    case 'topLeft':
      style.left = triggerRect.left + scrollX;
      style.top = triggerRect.top + scrollY - 4;
      style.transform = 'translateY(-100%)';
      break;
    case 'topRight':
      style.left = triggerRect.right + scrollX;
      style.top = triggerRect.top + scrollY - 4;
      style.transform = 'translate(-100%, -100%)';
      break;
    case 'bottomRight':
      style.left = triggerRect.right + scrollX;
      style.top = triggerRect.bottom + scrollY + 4;
      style.transform = 'translate(-100%, 0)';
      break;
    case 'bottomLeft':
    default:
      style.left = triggerRect.left + scrollX;
      style.top = triggerRect.bottom + scrollY + 4;
      break;
  }
  return style;
};

// 新增：递归菜单项组件，避免 hooks 问题
const DropdownMenuItemNode: React.FC<{
  item: DropdownMenuItem;
  onClick?: (info: { key: string }) => void;
  closeMenu: () => void;
}> = ({ item, onClick, closeMenu }) => {
  // 分组类型
  if (item.type === 'group') {
    return (
      <div className="cube-dropdown-group" key={item.key}>
        <div className="cube-dropdown-group-title">{item.label}</div>
        <div className="cube-dropdown-group-list">
          {item.children?.map(child => (
            <DropdownMenuItemNode
              key={child.key}
              item={child}
              onClick={onClick}
              closeMenu={closeMenu}
            />
          ))}
        </div>
      </div>
    );
  }
  const hasChildren = Array.isArray(item.children) && item.children.length > 0;
  const [submenuVisible, setSubmenuVisible] = React.useState(false);

  const handleMouseEnter = () => setSubmenuVisible(true);
  const handleMouseLeave = () => setSubmenuVisible(false);

  return (
    <div
      className={[
        'cube-dropdown-item',
        item.className,
        item.disabled ? 'cube-dropdown-item-disabled' : '',
        hasChildren ? 'cube-dropdown-item-has-children' : ''
      ].filter(Boolean).join(' ')}
      style={item.style}
      onClick={e => {
        if (item.disabled) {
          e.stopPropagation();
          return;
        }
        item.onClick?.(item.key);
        onClick?.({ key: item.key });
        if (item.closeOnClick !== false && !hasChildren) {
          closeMenu();
        }
        e.stopPropagation();
      }}
      onMouseEnter={hasChildren ? handleMouseEnter : undefined}
      onMouseLeave={hasChildren ? handleMouseLeave : undefined}
    >
      <span className="cube-dropdown-item-label">{item.label}</span>
      {hasChildren && <Icon className="cube-dropdown-item-arrow" name="output" size={16} />}
      {hasChildren && submenuVisible && (
        <div className="cube-dropdown-submenu-overlay">
          {item.children!.map(child => (
            <DropdownMenuItemNode
              key={child.key}
              item={child}
              onClick={onClick}
              closeMenu={closeMenu}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const Dropdown: React.FC<DropdownProps> = ({
  overlay,
  children,
  trigger = 'hover',
  placement = 'bottomLeft',
  disabled = false,
  visible: controlledVisible,
  onVisibleChange,
  overlayClassName = '',
  overlayStyle = {},
  className = '',
  style = {},
  onClick,
}) => {
  const [visible, setVisible] = useState(false);
  const triggerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const isControlled = controlledVisible !== undefined;
  const mergedVisible = isControlled ? controlledVisible : visible;

  // 递归渲染菜单项，支持多级菜单
  const renderMenuItems = (items: DropdownMenuItem[]) => {
    return items.map(item => {
      const hasChildren = Array.isArray(item.children) && item.children.length > 0;
      const [submenuVisible, setSubmenuVisible] = useState(false);
      // 用于子菜单 hover 控制
      const submenuRef = useRef<HTMLDivElement>(null);
      const handleMouseEnter = () => setSubmenuVisible(true);
      const handleMouseLeave = () => setSubmenuVisible(false);
      return (
        <div
          key={item.key}
          className={[
            'cube-dropdown-item',
            item.className,
            item.disabled ? 'cube-dropdown-item-disabled' : '',
            hasChildren ? 'cube-dropdown-item-has-children' : ''
          ].filter(Boolean).join(' ')}
          style={item.style}
          onClick={e => {
            if (item.disabled) {
              e.stopPropagation();
              return;
            }
            item.onClick?.(item.key);
            onClick?.({ key: item.key });
            if (item.closeOnClick !== false && !hasChildren) {
              closeMenu();
            }
            e.stopPropagation();
          }}
          onMouseEnter={hasChildren ? handleMouseEnter : undefined}
          onMouseLeave={hasChildren ? handleMouseLeave : undefined}
          ref={hasChildren ? submenuRef : undefined}
        >
          <span className="cube-dropdown-item-label">{item.label}</span>
          {hasChildren && <span className="cube-dropdown-item-arrow">▶</span>}
          {hasChildren && submenuVisible && (
            <div className="cube-dropdown-submenu-overlay">
              {renderMenuItems(item.children!)}
            </div>
          )}
        </div>
      );
    });
  };

  // 处理 overlay 支持函数、数组
  const getOverlay = () => {
    if (typeof overlay === 'function') return overlay();
    if (Array.isArray(overlay)) {
      return (
        <div className="cube-dropdown-menu-root">
          {overlay.map(item => (
            <DropdownMenuItemNode
              key={item.key}
              item={item}
              onClick={onClick}
              closeMenu={closeMenu}
            />
          ))}
        </div>
      );
    }
    return overlay;
  };

  // 关闭菜单
  const closeMenu = () => {
    if (!isControlled) setVisible(false);
    onVisibleChange?.(false);
  };

  // 处理菜单项点击自动关闭（仅对 overlay 为 ReactNode 情况）
  useEffect(() => {
    if (!mergedVisible) return;
    if (Array.isArray(overlay)) return; // 交由 onClick 处理
    const handleMenuClick = (event: MouseEvent) => {
      if (
        overlayRef.current &&
        overlayRef.current.contains(event.target as Node)
      ) {
        closeMenu();
      }
    };
    overlayRef.current?.addEventListener('click', handleMenuClick);
    return () => {
      overlayRef.current?.removeEventListener('click', handleMenuClick);
    };
    // eslint-disable-next-line
  }, [mergedVisible, overlayRef.current, overlay]);

  // 点击外部关闭
  useEffect(() => {
    if (!mergedVisible) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node) &&
        overlayRef.current &&
        !overlayRef.current.contains(event.target as Node)
      ) {
        closeMenu();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
    // eslint-disable-next-line
  }, [mergedVisible]);

  // 触发方式
  const triggers = Array.isArray(trigger) ? trigger : [trigger];
  const triggerProps: any = {};
  const overlayProps: any = {};
  const closeTimer = useRef<NodeJS.Timeout | null>(null);
  const delayCloseMenu = () => {
    closeTimer.current = setTimeout(() => {
      if (!isControlled) setVisible(false);
      onVisibleChange?.(false);
    }, 150);
  };
  const clearCloseMenu = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };
  if (!disabled) {
    if (triggers.includes('click')) {
      triggerProps.onClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (!isControlled) setVisible(!mergedVisible);
        onVisibleChange?.(!mergedVisible);
      };
    }
    if (triggers.includes('hover')) {
      triggerProps.onMouseEnter = (e: React.MouseEvent) => {
        clearCloseMenu();
        if (!isControlled) setVisible(true);
        onVisibleChange?.(true);
      };
      triggerProps.onMouseLeave = delayCloseMenu;
      overlayProps.onMouseEnter = (e: React.MouseEvent) => {
        clearCloseMenu();
        if (!isControlled) setVisible(true);
        onVisibleChange?.(true);
      };
      overlayProps.onMouseLeave = delayCloseMenu;
    }
    // 保留 contextMenu 触发
    if (triggers.includes('contextMenu')) {
      triggerProps.onContextMenu = (e: React.MouseEvent) => {
        e.preventDefault();
        if (!isControlled) setVisible(!mergedVisible);
        onVisibleChange?.(!mergedVisible);
      };
    }
  }

  // 计算弹出层位置
  const [popupStyle, setPopupStyle] = useState<React.CSSProperties>({});
  useEffect(() => {
    if (mergedVisible && triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      setPopupStyle(getPopupPosition(rect, placement));
    }
  }, [mergedVisible, placement]);

  return (
    <div className={`cube-dropdown ${className}`} style={{ display: 'inline-block', ...style }}>
      <div ref={triggerRef} {...triggerProps} style={disabled ? { pointerEvents: 'none', opacity: 0.5 } : {}}>
        {children}
      </div>
      {mergedVisible &&
        ReactDOM.createPortal(
          <div
            ref={overlayRef}
            {...overlayProps}
            className={`cube-dropdown-overlay ${overlayClassName}`}
            style={{ ...popupStyle, ...overlayStyle }}
          >
            {getOverlay()}
          </div>,
          document.body
        )
      }
    </div>
  );
};

export default Dropdown; 