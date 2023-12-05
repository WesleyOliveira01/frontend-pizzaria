import { GetServerSideProps } from "next";
import { Metadata } from "next";

export const getServerSideProps:GetServerSideProps = async () =>{
    return { props: {

    }}
}

export const metadata:Metadata = {
    title:"Dashboard",
    description:"the Dashboard at PizzApp",
}

const Dashboard = () => {
    return ( <main>
        <h1 className="text-4xl text-center text-tomato">dashboard</h1>
    </main> );
}
 
export default Dashboard;