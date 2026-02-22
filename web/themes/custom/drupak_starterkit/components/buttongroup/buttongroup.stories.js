export default {
  title: "Button Group",
  tags: ["autodocs"],
  argTypes: {
    buttons: {
      control: "object",
      description: "List of buttons in the group",
    },
  },
};

/* ---------- TEMPLATE ---------- */

const Template = ({ buttons }) => `
  <div class="button-group">
    ${buttons
      .map(
        (button) => `
          <a
            href="${button.link}"
            class="sdcbutton ${button.type}"
          >
            ${button.text}
          </a>
        `
      )
      .join("")}
  </div>
`;

/* ---------- STORIES ---------- */

export const Default = {
  args: {
    buttons: [
      { link: "#", text: "Primary", type: "primary" },
      { link: "#", text: "Secondary", type: "secondary" },
      { link: "#", text: "Outline", type: "outline" },
    ],
  },
  render: Template,
};

export const TwoButtons = {
  args: {
    buttons: [
      { link: "#", text: "Yes", type: "primary" },
      { link: "#", text: "No", type: "secondary" },
    ],
  },
  render: Template,
};