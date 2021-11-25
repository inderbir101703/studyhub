import { render, screen } from "@testing-library/react";

import userEvent from "@testing-library/user-event";

test("Comment Box", () => {
  const wrapper = render(
    <textarea
      type="text"
      className="comment-box"
      id="comm"
      placeholder="Write a comment..."
      rows="3"
      col="50"
    ></textarea>
  );

  expect(wrapper).toBeDefined();

  expect(wrapper).toMatchSnapshot();
});
