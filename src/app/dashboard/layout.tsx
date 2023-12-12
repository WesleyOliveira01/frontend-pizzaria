
import { ReactNode } from 'react';
import Header from './../../components/Header';

const LayoutDashboard = ({children}:{children:ReactNode}) => {
    return ( 
        <>
            <Header/>
            {children}
        </>
     );
}
 
export default LayoutDashboard;