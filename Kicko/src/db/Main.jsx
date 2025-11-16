import { SearchProvider } from "./search"
import { DataProvider } from "./data"
import { CartProvider } from "./Cart"


export const MainWrapper = ({children}) => {
    return(
        <DataProvider>
            <SearchProvider>
                <CartProvider>
                  {children}
                </CartProvider>
            </SearchProvider>
        </DataProvider>
    )
}