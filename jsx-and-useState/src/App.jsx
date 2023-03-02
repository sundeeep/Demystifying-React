import {useState} from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TodoApp from "./todo-sample-app/TodoApp";

const App = () => {

    return( 
        <div className="h-[100vh] w-[100vw]">
            <Header />

            <TodoApp />

            <Footer />
        </div>   
    )
}

export default App;