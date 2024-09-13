'use client';
import { Provider } from "react-redux";
import store from "./store";
import { IPropChildren } from "@/utils/interfaces";

function Providers({children}: IPropChildren) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
}

export default Providers