import "./Dashboard.css"
import HeaderDashboard from "../../components/HeaderDashboard/HeaderDashboard"
import Menudashboard from "../../components/menudashboard/menudashboard"

function Dashboard() {
    return (
        <div>
            <HeaderDashboard />
            <div className="Dashboard">
                    <Menudashboard/>
                <div className="dados"></div>
            </div>
        </div>
    )
}

export default Dashboard