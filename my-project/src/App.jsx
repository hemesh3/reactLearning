import Header from "./components/Header"
import Footer from "./components/Footer"
import List from "./components/List"
import Student from "./components/Student"
import Button from "./components/Button"
import Addcar from "./components/Addcar"
import Todolist from "./components/Todolist"
import Useeffecttask from "./components/Useeffecttask"
import DigitalClock from "./components/DigitalClock"
import UseContexttask from "./components/UseContexttask"

function App() {
  const fruits = [
    { id: 1, name: "Apple", calories: 52 },
    { id: 2, name: "Banana", calories: 89 },
    { id: 3, name: "Orange", calories: 47 },
    { id: 4, name: "Strawberry", calories: 32 },
    { id: 5, name: "Grapes", calories: 67 },
    { id: 6, name: "Pineapple", calories: 50 },
    { id: 7, name: "Watermelon", calories: 30 },
    { id: 8, name: "Mango", calories: 60 },
    { id: 9, name: "Kiwi", calories: 61 },
    { id: 10, name: "Peach", calories: 39 }
];
  return (
    <>
      <Header/>
      <Student name="Hemesh" age={27} student={true}/>
      <Student/>
      <List item={fruits} categ='Fruits'/>
      <Button/>
      <Addcar/>
      <Todolist/>
      <Useeffecttask/>
      <DigitalClock/>
      <UseContexttask/>
      <Footer/>
    </>
  )
}

export default App
