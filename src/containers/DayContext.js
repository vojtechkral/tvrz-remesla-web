import React, {createContext, useContext} from 'react';

const DayContext = createContext(null);

export const DayProvider = DayContext.Provider;

export const withDayContext = (Component) => (props) => {
    const day = useContext(DayContext);
    return <Component {...props} day={day} />;
};
