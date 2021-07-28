import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import {
  Categories,
  SortBy,
  Pizza,
  PizzaLoadingPlaceholder,
} from "../components";
import { setCategory, setSortBy } from "../redux/actions/filters";
import { fetchPizzas } from "../redux/actions/pizzas";
import { addPizzaToCart } from "../redux/actions/cart";

const categories = ["Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];

function Home() {
  const dispatch = useDispatch();

  const pizzas = useSelector(({ pizzas }) => pizzas.items);
  const cartItems = useSelector(({ cart }) => cart.items);

  // const { pizzas, filters } = useSelector((state) => {  Тоже самое что сверху
  //   return {
  //     pizzas: state.pizzas.items,
  //     filters: state.filters.sortBy
  //   }
  // });
  const { category, sortBy } = useSelector(({ filters }) => filters);

  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const loadedArray = Array(pizzas.length || 10).fill();

  useEffect(() => {
    dispatch(fetchPizzas(category, sortBy));
    // fetchPizzas(category, sortBy)(dispatch); Тоже самое что сверху
  }, [category, sortBy]);

  const sort = [
    {
      label: "популярности",
      field: "popular",
    },
    {
      label: "цене",
      field: "price",
    },
    {
      label: "алфавиту",
      field: "name",
    },
  ];

  const currentCategory = React.useCallback(
    (value) => {
      dispatch(setCategory(value));
    },
    []
  );
  const currentSort = React.useCallback(
    (value) => {
      dispatch(setSortBy(value));
    },
    []
  );

  const onAddPizza = (item) => {
    dispatch(addPizzaToCart(item));
  };

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          items={categories}
          activeCategory={category}
          onClickCategory={currentCategory}
        />
        <SortBy
          activeSortType={sortBy}
          items={sort}
          onClickSort={currentSort}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? pizzas.map((el, index) => (
              <Pizza onAddPizza={onAddPizza} inCartCount={cartItems[el.id] && cartItems[el.id].items.length} item={el} key={index} />
            ))
          : loadedArray.map((_, i) => <PizzaLoadingPlaceholder key={i} />)}
      </div>
    </div>
  );
}

export default Home;
