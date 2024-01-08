import {Suspense} from "react";
import PublicRoutes from "./routes/PublicRoutes";



const App = () => {
    return (
        <Suspense fallback={'Loading ...'}>
            <PublicRoutes/>
            {/*<PrivateRoutes/>*/}
        </Suspense>
    )
}

export default App;