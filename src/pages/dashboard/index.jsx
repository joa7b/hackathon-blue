import Apps from "../../components/apps";
import Card from "../../components/cards";

import "./style.css";

const Dashboard = () => {
    return(
        <main className="dashboardWrapper">
            <Apps />
            <div className="content">
            <section className="chartsContainer">
                    <img src="https://i0.wp.com/www.solverglobal.com/wp-content/uploads/2020/03/PowerBI_Hospitality_02-1.jpg" alt="" />
            </section>
            <section className="cardContainer">
                <Card />
                <Card />
                <Card />
                <Card />
            </section>
            </div>
        </main>
    )
}   

export default Dashboard;