import {DropdownNotStyled} from "./Dropdown";

import { render, screen } from "@testing-library/react";

import userEvent from "@testing-library/user-event";

test("Order Dropdown", () => { 
  const wrapper = render(
    <DropdownNotStyled
      className="order"
      labelclassName="orderbylabel"
      labelname="Order By: "
      onChange={() => {
        console.log("Onchange Event");
      }}
      options={[
        {
          label: "ASC",
          value: "ascending",
        },
        {
          label: "DSC",
          value: "descending",
        },
      ]}
    />
  );

  expect(wrapper).toBeDefined();

  expect(wrapper).toMatchSnapshot();
});

test("Sort Dropdown", () => {
  const wrapper = render(
    <DropdownNotStyled
      className="sort"
      labelclassName="sortbylabel"
      labelname="Sort By: "
      onChange={() => {
        console.log("Onchange Event");
      }}
      options={[
        {
          label: "Name",
          value: "name",
        },
        {
          label: "Author",
          value: "author",
        },
        {
          label: "Progress",
          value: "progress",
        },
      ]}
    />
  );

  expect(wrapper).toBeDefined();

  expect(wrapper).toMatchSnapshot();
});

test("Category Large", () => {
  const wrapper = render(
    <DropdownNotStyled
      className="category-form"
      labelclassName=""
      labelname=""
      onChange={() => {
        console.log("Onchange Event");
      }}
      options={[
        {
          label: "Select a Category",
          value: "0",
        },
        {
          label: "Mango",
          value: "mango",
        },
        {
          label: "Banana",
          value: "banana",
        },
        {
          label: "Pineapple",
          value: "pineapple",
        },
      ]}
    />
  );

  expect(wrapper).toBeDefined();

  expect(wrapper).toMatchSnapshot();
});

test("Category Small", () => {
  const wrapper = render(
    <DropdownNotStyled
      className="category-sm"
      abelclassName=""
      labelname=""
      onChange={() => {
        console.log("Onchange Event");
      }}
      options={[
        {
          label: "Select a Category",
          value: "0",
        },
        {
          label: "Mango",
          value: "mango",
        },
        {
          label: "Banana",
          value: "banana",
        },
        {
          label: "Pineapple",
          value: "pineapple",
        },
      ]}
    />
  );

  expect(wrapper).toBeDefined();

  expect(wrapper).toMatchSnapshot();
});
