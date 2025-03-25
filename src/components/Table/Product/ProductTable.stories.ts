import { Story } from "@storybook/vue3";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import ProductTable, { Props } from "./ProductTable.vue";

export default {
  title: "Components/Table/ProductsTable",
  component: ProductTable,
};
const Template: Story<Props> = (args: Props) => ({
  components: { ProductTable },

  setup() {
    return { args };
  },
  template: `
        <div>
          <div>
            <ProductTable v-bind="args" />
          </div>
        </div>
    `,
});

export const Table = Template.bind({});
Table.args = {
  headerData: [
    {
      title: "Product name",
    },
    {
      title: "Color",
    },
    {
      title: "Category",
    },
    {
      title: "Accesories",
    },
    {
      title: "Available",
    },
    {
      title: "Price",
    },
    {
      title: "Weight",
    },
    {
      title: "Action",
    },
  ],
  bodyData: [
    {
      title: "Apple MacBook Pro 17",
      row: [
        {
          title: "Silver",
        },
        {
          title: "Laptop",
        },
        {
          title: "Yes",
        },
        {
          title: "Yes",
        },
        {
          title: "$2999",
        },
        {
          title: "3.0 lb.",
        },
      ],
    },{
      title: "Apple MacBook Pro 17",
      row: [
        {
          title: "Silver",
        },
        {
          title: "Laptop",
        },
        {
          title: "Yes",
        },
        {
          title: "Yes",
        },
        {
          title: "$2999",
        },
        {
          title: "3.0 lb.",
        },
      ],
    },{
      title: "Apple MacBook Pro 17",
      row: [
        {
          title: "Silver",
        },
        {
          title: "Laptop",
        },
        {
          title: "Yes",
        },
        {
          title: "Yes",
        },
        {
          title: "$2999",
        },
        {
          title: "3.0 lb.",
        },
      ],
    },{
      title: "Apple MacBook Pro 17",
      row: [
        {
          title: "Silver",
        },
        {
          title: "Laptop",
        },
        {
          title: "Yes",
        },
        {
          title: "Yes",
        },
        {
          title: "$2999",
        },
        {
          title: "3.0 lb.",
        },
      ],
    },{
      title: "Apple MacBook Pro 17",
      row: [
        {
          title: "Silver",
        },
        {
          title: "Laptop",
        },
        {
          title: "Yes",
        },
        {
          title: "Yes",
        },
        {
          title: "$2999",
        },
        {
          title: "3.0 lb.",
        },
      ],
    },{
      title: "Apple MacBook Pro 17",
      row: [
        {
          title: "Silver",
        },
        {
          title: "Laptop",
        },
        {
          title: "Yes",
        },
        {
          title: "Yes",
        },
        {
          title: "$2999",
        },
        {
          title: "3.0 lb.",
        },
      ],
    },{
      title: "Apple MacBook Pro 17",
      row: [
        {
          title: "Silver",
        },
        {
          title: "Laptop",
        },
        {
          title: "Yes",
        },
        {
          title: "Yes",
        },
        {
          title: "$2999",
        },
        {
          title: "3.0 lb.",
        },
      ],
    },
  ],
};
