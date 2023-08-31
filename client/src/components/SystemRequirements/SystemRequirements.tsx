import { Card } from "antd";
import { Requirements } from "../../../../types/requirements";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import {
  BorderOutlined,
  BuildOutlined,
  CodeOutlined,
  DesktopOutlined,
  SaveOutlined,
  WarningOutlined,
} from "@ant-design/icons";
import { CSSProperties } from "react";

export function SystemRequirements({
  requirements,
  style,
}: {
  requirements: Requirements;
  style?: CSSProperties;
}) {
  const { graphics, memory, os, processor, storage } = requirements;

  return (
    <Card bodyStyle={{ padding: "1rem" }} style={style}>
      <Title level={3}>
        <WarningOutlined /> Minimal system requirements
      </Title>
      <Paragraph>
        <BorderOutlined /> {processor}
      </Paragraph>
      <Paragraph>
        <DesktopOutlined /> {graphics}
      </Paragraph>
      <Paragraph>
        <BuildOutlined /> {memory}
      </Paragraph>
      <Paragraph>
        <CodeOutlined /> {os}
      </Paragraph>
      <Paragraph style={{ margin: "0" }}>
        <SaveOutlined /> {storage}
      </Paragraph>
    </Card>
  );
}
