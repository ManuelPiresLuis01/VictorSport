import "./Dashboard.css"
import HeaderDashboard from "../../components/HeaderDashboard/HeaderDashboard"
import Menudashboard from "../../components/menudashboard/menudashboard"

function Dashboard() {
    return (
        <div className="Dashboard">
            <HeaderDashboard />
            <Menudashboard />
            <div className="dados">
                
            </div>
        </div>
    )
}

export default Dashboard