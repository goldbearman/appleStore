import {Suspense} from "react";
import PublicRoutes from "./routes/PublicRoutes";
import Header from "./features/Header";
import {AppStyles,Footer} from "./App.styled";


const App = () => {
    return <>
        <AppStyles/>

        <Header/>
        <Suspense fallback={'Loading ...'}>
            <PublicRoutes/>
            {/*<PrivateRoutes/>*/}
        </Suspense>

        <Footer>
            <div>Маркетплейс</div>
        </Footer>
    </>
}

export default App;