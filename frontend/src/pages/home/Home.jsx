import { useState } from 'react';
import { Container, LeftBar, RightBar } from './styles';
import 'bootstrap/dist/css/bootstrap.min.css';
import useGetAllCategories from '../../hooks/useGetAllCategories';
import { useSelector, useDispatch } from 'react-redux';
import { increment, reset } from '../../features/counter/counterSlice.js';
import CategoryDropdown from '../../components/CategoryDropdown.jsx';
import ProductInput from '../../components/ProductInput';
import BottomBarComponent from '../../components/BottomBar';
import useCreateOrder from '../../hooks/useCreateOrder.js';

function Home() {
  const [cleaningCounter, setCleaningCounter] = useState(0);
  const [cheesesCounter, setCheesesCounter] = useState(0);
  const [vegNfruCounter, setVegNfruCounter] = useState(0);
  const [meatNfishCounter, setMeatNfishCounter] = useState(0);
  const [pastriesCounter, setPastriesCounter] = useState(0);
  const [currentCategory, setCurrentCategory] = useState({ title: 'Choose Category...' });
  const [productsList, setProductsList] = useState([]);
  const [inputText, setInputText] = useState('');
  const { categories } = useGetAllCategories();

  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const { createOrder } = useCreateOrder();

  const handleComplete = () => {
    if (productsList.length === 0) {
      alert('Please add products to your shopping list');
      return;
    }
    createOrder(productsList);
    setProductsList([]);
    dispatch(reset());
    setCleaningCounter(0);
    setCheesesCounter(0);
    setVegNfruCounter(0);
    setMeatNfishCounter(0);
    setPastriesCounter(0);
  }

  const handleAddClick = () => {
    if (inputText.length === 0) {
      alert('Please fill the name of the product');
      return;
    }

    const isDuplicate = productsList.find(
      (item) =>
        item.title === inputText && item.category === currentCategory.title
    );
    var updatedProduct;

    if (!isDuplicate) {
      if (currentCategory.title !== 'Choose Category...') {
        updatedProduct = {
          title: inputText,
          quantity: 1,
          category: currentCategory.title,
        };

        setProductsList((prevList) => [...prevList, updatedProduct]);
        dispatch(increment());
      }
    } else {
      const updatedProducts = productsList.map((p) =>
        p.title === inputText && p.category === currentCategory.title
          ? { ...p, quantity: p.quantity + 1 }
          : p
      );
      setProductsList(updatedProducts);
      dispatch(increment());
    }

    switch (currentCategory.title) {
      case 'Cleaning':
        setCleaningCounter((prevCounter) => prevCounter + 1);
        break;
      case 'Cheeses':
        setCheesesCounter((prevCounter) => prevCounter + 1);
        break;
      case 'Vegetables and Fruits':
        setVegNfruCounter((prevCounter) => prevCounter + 1);
        break;
      case 'Meat and Fish':
        setMeatNfishCounter((prevCounter) => prevCounter + 1);
        break;
      case 'Pastries':
        setPastriesCounter((prevCounter) => prevCounter + 1);
        break;
      default:
        alert('Please choose category');
    }

    setInputText('');
    setCurrentCategory({ title: 'Choose Category...' });
  };

  const categoryCounters = {
    'Cleaning': cleaningCounter,
    'Cheeses': cheesesCounter,
    'Vegetables and Fruits': vegNfruCounter,
    'Meat and Fish': meatNfishCounter,
    'Pastries': pastriesCounter,
  };

  return (
    <Container>
      <LeftBar>
        <CategoryDropdown
          currentCategory={currentCategory}
          categories={categories}
          setCurrentCategory={setCurrentCategory}
        />
      </LeftBar>
      <RightBar>
        <ProductInput
          inputText={inputText}
          setInputText={setInputText}
          handleAddClick={handleAddClick}
        />
      </RightBar>
      <BottomBarComponent
        categories={categories}
        productsList={productsList}
        categoryCounters={categoryCounters}
        count={count}
        handleComplete={handleComplete}
      />
      {/* <Button
      style={{ height: '60px', marginRight: '20px', marginLeft: '10px' }}
      onClick={() => createOrder(productsList)}
    >
      Complete Order
    </Button> */}
    </Container>
  );
}

export default Home;