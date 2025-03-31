import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";
import { DoubleRightOutlined, DoubleLeftOutlined } from "@ant-design/icons";
import { fn } from "@storybook/test";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Button> = {
  title: "Code88/PS3838/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: false,
      description:
        "Nội dung bên trong Button, có thể là text, JSX, hoặc các React component khác.", // Thêm mô tả
      table: {
        // Cấu hình hiển thị trong bảng Docs
        type: { summary: "React.ReactNode" }, // Hiển thị đúng kiểu dữ liệu
      },
    },
  },
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Submit: Story = {
  args: {
    children: "Submit",
    customBackground:
      "-webkit-gradient(linear, left top, left bottom, from(#f29500), to(#e45503))",
    borderRadius: "3px",
    boxShadow: "inset 0 1px 0 0 #ffe400",
    padding: "1px 7px",
    textColor: "#fff",
    fontWeight: "700",
    border: "1px solid #c54500",
    onClick: () => alert("Button Clicked"),
    height: "27px",
  },
};

export const Secondary: Story = {
  args: {
    children: "This Week",
    customBackground: "#00264a",
    borderRadius: "3px",
    boxShadow: "inset 0 -1px 0 0 #005db6",
    padding: "1px 7px",
    textColor: "#fff",
    fontWeight: "700",
    border: "1px solid #001a32",
    onClick: () => alert("Button Clicked"),
    height: "27px",
  },
};

export const DoubleRight: Story = {
  args: {
    children: <DoubleRightOutlined />,
    customBackground:
      "-webkit-gradient(linear, left top, left bottom, from(#f29500), to(#e45503))",
    borderRadius: "3px",
    boxShadow: "inset 0 1px 0 0 #ffe400",
    padding: "1px 7px",
    textColor: "#fff",
    fontWeight: "700",
    border: "1px solid #c54500",
    onClick: () => alert("Button Clicked"),
    height: "27px",
  },
};

export const DoubleLeft: Story = {
  args: {
    children: <DoubleLeftOutlined />,
    customBackground:
      "-webkit-gradient(linear, left top, left bottom, from(#f29500), to(#e45503))",
    borderRadius: "3px",
    boxShadow: "inset 0 1px 0 0 #ffe400",
    padding: "1px 7px",
    textColor: "#fff",
    fontWeight: "700",
    border: "1px solid #c54500",
    onClick: () => alert("Button Clicked"),
    height: "27px",
  },
};
