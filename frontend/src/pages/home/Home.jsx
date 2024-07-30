import { useState } from "react";
import {
  Container,
  LeftBar,
  RightBar,
  BottomBar,
  Card,
  ProductButton,
  CategoryButton,
} from "./styles";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/esm/Button";
import TextField from "@mui/material/TextField";
import useGetAllCategories from "../../hooks/useGetAllCategories";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../../features/counter/counterSlice.js";

function Home(props) {
  const [cleaningCounter, setCleaningCounter] = useState(0);
  const [cheesesCounter, setCheesesCounter] = useState(0);
  const [vegNfruCounter, setVegNfruCounter] = useState(0);
  const [meatNfishCounter, setMeatNfishCounter] = useState(0);
  const [pastriesCounter, setPastriesCounter] = useState(0);
  const [currentCategory, setCurrentCategory] = useState({
    title: "Choose Category...",
  });
  const [productsList, setProductsList] = useState([]);
  const [inputText, setInputText] = useState("");
  const { categories } = useGetAllCategories();

  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleAddClick = () => {
    if (inputText.length === 0) {
      alert("Please fill the name of the product");
      return;
    }

    // Check if the product is already in the list
    const isDuplicate = productsList.find(
      (item) =>
        item.title === inputText && item.category === currentCategory.title
    );
    var updatedProduct;

    // If not a duplicate, add the product to the list
    if (!isDuplicate) {
      if (currentCategory.title !== "Choose Category...") {
        updatedProduct = {
          title: inputText,
          quantity: 1,
          category: currentCategory.title,
        };

        //order instead
        setProductsList((prevList) => [...prevList, updatedProduct]);
        dispatch(increment());
      }
    } else {
      // increase the product counter
      const updatedProducts = productsList.map((p) =>
        p.title === inputText && p.category === currentCategory.title
          ? { ...p, quantity: p.quantity + 1 }
          : p
      );
      setProductsList(updatedProducts);
      dispatch(increment());
    }

    // increment the category counter
    switch (currentCategory.title) {
      case "Cleaning":
        setCleaningCounter((prevCounter) => prevCounter + 1);
        break;
      case "Cheeses":
        setCheesesCounter((prevCounter) => prevCounter + 1);
        break;
      case "Vegetables and Fruits":
        setVegNfruCounter((prevCounter) => prevCounter + 1);
        break;
      case "Meat and Fish":
        setMeatNfishCounter((prevCounter) => prevCounter + 1);
        break;
      case "Pastries":
        setPastriesCounter((prevCounter) => prevCounter + 1);
        break;
      default:
        alert("Please choose category");
    }

    //clear all fields
    setInputText("");
    setCurrentCategory({ title: "Choose Category..." });
  };

  return (
    <Container>
      <LeftBar>
        <DropdownButton
          id="dropdown-basic-button"
          title={currentCategory.title}
        >
          {categories.map((category) => (
            <Dropdown.Item
              key={category._id}
              onClick={() => setCurrentCategory(category)}
            >
              {category.title}
            </Dropdown.Item>
          ))}
        </DropdownButton>
      </LeftBar>
      <RightBar>
        <TextField
          style={{ width: "300px" }}
          type="text"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Add product..."
        />
        <Button style={{ width: "100px" }} onClick={() => handleAddClick()}>
          Add
        </Button>
      </RightBar>
      <BottomBar>
        <h4>Total: {count}</h4>
        {categories.map((category) => (
          <Card key={category._id}>
            <CategoryButton key={category._id}>
              {category.title} {"("}
              {category.title === "Cleaning" && cleaningCounter}
              {category.title === "Cheeses" && cheesesCounter}
              {category.title === "Vegetables and Fruits" && vegNfruCounter}
              {category.title === "Meat and Fish" && meatNfishCounter}
              {category.title === "Pastries" && pastriesCounter}
              {")"}
            </CategoryButton>
            {productsList
              .filter((product) => product.category === category.title)
              .map((product) => (
                <ProductButton key={category._id}>
                  {product.title} {`(${product.quantity})`}
                </ProductButton>
              ))}
          </Card>
        ))}
        <Button
          style={{ height: "60px", marginRight: "20px", marginLeft: "10px" }}
          onClick={() => props.navigate()}
        >
          Complete Order
        </Button>
      </BottomBar>
    </Container>
  );
}

export default Home;
