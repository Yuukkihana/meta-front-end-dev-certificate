import './App.css';
import Desserts from './components/Desserts';
import DessertsList from './components/DessertsList';

const topDesserts = [
  {
    id: "1",
    title: "Tiramisu",
    desription: "The best tiramisu in town",
    price: "5$"
  },
  {
    id: "2",
    title: "Ice Cream",
    desription: "The best ice cream in town",
    price: "4.50$"
  },
  {
    id: "3",
    title: "Chocolate Mousse",
    desription: "The best chocolate mousse in town",
    price: "7$"
  }
]

function App() {
  const listItems = topDesserts.map(dessert => {
  const itemText = `${dessert.title} - ${dessert.price}`
    return <li>{itemText}</li>;
  })
  return (
    <div className="App">
      <ul>
        {listItems}
      </ul>
      <h1>This is a lab</h1>
      <p>Task: create a basic List component, working with provided data and displaying items based on certain criteria.</p>
      <Desserts />
    </div>
  );
}

export default App;
