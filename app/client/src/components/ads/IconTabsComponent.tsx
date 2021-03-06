import React from "react";
import styled from "styled-components";
import { ControlIcons, ControlIconName } from "icons/ControlIcons";

const ItemWrapper = styled.div<{ selected: boolean }>`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) =>
    props.selected
      ? props.theme.colors.propertyPane.activeButtonText
      : props.theme.colors.propertyPane.multiDropdownBoxHoverBg};
  cursor: pointer;
  &&& svg {
    path {
      fill: ${(props) =>
        props.selected
          ? props.theme.colors.propertyPane.buttonText
          : props.theme.colors.propertyPane.jsIconBg} !important;
    }
  }
`;

const FlexWrapper = styled.div`
  display: flex;
`;

export interface IconTabOption {
  icon: string;
  value: string;
}

interface IconTabsComponentProps {
  options: IconTabOption[];
  value: string;
  selectOption: (value: string) => void;
}

function IconTabsComponent(props: IconTabsComponentProps) {
  return (
    <FlexWrapper>
      {props.options.map((option: IconTabOption, index: number) => {
        const controlIconName: ControlIconName = option.icon;
        const ControlIcon = ControlIcons[controlIconName];
        const isSelected = props.value === option.value;
        return (
          <ItemWrapper
            className={`t--icon-tab-${option.value}`}
            key={index}
            onClick={() => props.selectOption(option.value)}
            selected={isSelected}
          >
            <ControlIcon height={24} width={24} />
          </ItemWrapper>
        );
      })}
    </FlexWrapper>
  );
}

export default IconTabsComponent;
