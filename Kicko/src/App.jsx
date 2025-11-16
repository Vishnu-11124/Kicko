import { RouterProvider } from "react-router-dom"
import { MainWrapper } from "./db/Main"
import router from "./router/MainRouter"


const App = () => {
  return (
    <>
      <MainWrapper >
        <RouterProvider router={router}/>
      </MainWrapper>
    </>
  )
}

export default App
