import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

const Categories = React.memo(function Categories({
  activeCategory,
  items,
  onClickCategory,
}) {
  return (
    <div className="categories">
      <ul>
        <li
          className={classNames({
            active: activeCategory === null,
          })}
          onClick={() => onClickCategory(null)}
        >
          Все
        </li>
        {items &&
          items.map((item, i) => (
            <li
              className={classNames({
                active: activeCategory === i,
              })}
              onClick={() => onClickCategory(i)}
              key={i}
            >
              {item}
            </li>
          ))}
      </ul>
    </div>
  );
});

Categories.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeCategory: PropTypes.oneOfType([PropTypes.number]),
  onClickCategory: PropTypes.func.isRequired,
};

Categories.defaultProps = {
  items: [],
  activeCategory: null,
};

export default Categories;
