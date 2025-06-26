import React from 'react';
import { Select } from 'cube';

interface CustomSelectOption {
  value: string;
  label: string;
  desc?: string;
}

const options: CustomSelectOption[] = [
  { value: '1', label: '选项1', desc: '描述1' },
  { value: '2', label: '选项2', desc: '描述2' },
  { value: '3', label: '选项3', desc: '描述3' },
];

// 用于下拉选项的渲染
const CustomOption = ({ option }: { option: CustomSelectOption }) => (
  <div className="ice-select-option-content">
    <div className="ice-select-option-content-label">{option.label}</div>
    <div className="ice-select-option-content-desc">{option.desc}</div>
  </div>
);

const Demo = () => {
  const [value, setValue] = React.useState<string | number>('');

  return (
    <Select
      style={{ width: '50%' }}
      options={options}
      value={value}
      optionRenderer={(option) => <CustomOption option={option as CustomSelectOption} />}
      renderTag={(option) => <span>{(option as CustomSelectOption).label}</span>}
      placeholder="请选择"
      onChange={(val) => {
        if (Array.isArray(val)) return;
        setValue(val);
      }}
      filterable
    />
  );
};

export default Demo;