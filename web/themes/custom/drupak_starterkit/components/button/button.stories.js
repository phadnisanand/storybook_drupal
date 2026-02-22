export default {
  title: "Button",
  argTypes: {
    link: { control: "text" },
    linkText: { control: "text" },
    buttonType: {
      control: { type: "select" },
      options: ["primary", "secondary", "outline"],
    },
  },
};

/* ---------- TEMPLATE ---------- */

const Template = ({ link, linkText, buttonType }) => `
  <a href="${link}" class="sdcbutton ${buttonType}">
    ${linkText}
  </a>
`;

/* ---------- STORIES ---------- */

export const Primary = {
  args: {
    link: "#",
    linkText: "Primary Button",
    buttonType: "primary",
  },
  render: Template,
};

export const Secondary = {
  args: {
    link: "#",
    linkText: "Secondary Button",
    buttonType: "secondary",
  },
  render: Template,
};

export const Outline = {
  args: {
    link: "#",
    linkText: "Outline Button",
    buttonType: "outline",
  },
  render: Template,
};