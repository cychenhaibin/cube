import React, { useState } from 'react';
import { Rate, Select, Checkbox } from 'cube';

export default () => {
  const [config, setConfig] = useState<{
    value: number;
    allowHalf: boolean;
    allowClear: boolean;
    disabled: boolean;
    icon: "star" | "heart";
  }>({
    value: 0,
    allowHalf: false,
    allowClear: true,
    disabled: false,
    icon: "star"
  });
  
  const icons: Array<"star" | "heart"> = ["star", "heart"];
  const texts = ['极差', '失望', '一般', '满意', '惊喜'];

  return (
    <div>
      <div style={{ marginBottom: 20 }}>
        <Rate 
          value={config.value}
          onChange={(val) => setConfig(prev => ({ ...prev, value: val }))}
          allowHalf={config.allowHalf}
          allowClear={config.allowClear}
          disabled={config.disabled}
          icon={config.icon}
          showText
          texts={texts}
        />
      </div>
      
      <div style={{ marginBottom: 16 }}>
        当前评分：{config.value} 分
        {config.value > 0 && <span>（{texts[Math.ceil(config.value) - 1]}）</span>}
      </div>

      <div style={{ marginBottom: 8 }}>
        <Checkbox
          checked={config.allowHalf}
          onChange={(checked) => setConfig(prev => ({ ...prev, allowHalf: checked }))}
          style={{ marginRight: 16 }}
        >
          允许半星
        </Checkbox>

        <Checkbox
          checked={config.allowClear}
          onChange={(checked) => setConfig(prev => ({ ...prev, allowClear: checked }))}
          style={{ marginRight: 16 }}
        >
          可清除
        </Checkbox>

        <Checkbox
          checked={config.disabled}
          onChange={(checked) => setConfig(prev => ({ ...prev, disabled: checked }))}
        >
          禁用
        </Checkbox>
      </div>

      <div>
        图标类型：
        <Select
          value={config.icon}
          options={icons.map(icon => ({ label: icon, value: icon }))}
          onChange={(val) => setConfig(prev => ({ ...prev, icon: val as "star" | "heart" }))}
          style={{ marginLeft: 8, width: 100 }}
        />
      </div>
    </div>
  );
};