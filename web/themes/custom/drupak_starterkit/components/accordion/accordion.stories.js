export default {
  title: "Accordion",
  tags: ["autodocs"],
  argTypes: {
    maintitle: { control: "text" },
    color: {
      control: { type: "select" },
      options: ["dark", "light"],
    },
  },
};

/* ---------- TEMPLATE ---------- */

const Template = ({ maintitle, color }) => `
  <section class="accordion-wrapper ${color}">
    <h2>${maintitle}</h2>

    <div class="accordion">
      <div class="accordion__intro">
        <h4>Hello Shaukat</h4>
      </div>
      <div class="accordion__content">
        This is accordion data Azmat
      </div>
    </div>

    <div class="accordion">
      <div class="accordion__intro">
        <h4>Hello Shaukat</h4>
      </div>
      <div class="accordion__content">
        This is accordion data Azmat
      </div>
    </div>
  </section>
`;

/* ---------- STORIES ---------- */

export const Dark = {
  args: {
    maintitle: "This is title 1",
    color: "dark",
  },
  render: Template,
};

export const Light = {
  args: {
    maintitle: "This is title 2",
    color: "light",
  },
  render: Template,
};