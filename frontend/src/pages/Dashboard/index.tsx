import BarChart from "components/BarChart";
import DataTable from "components/DataTable";
import DonutChart from "components/DonutChart";
import 'bootstrap/dist/css/bootstrap.css';
import Footer from "components/Footer";
import NavBar from "components/NavBar";

const Dashboard = () => {
    return (
        <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-light border-bottom shadow-sm">
            <>
                <NavBar />
                <div className="container">
                    <h1 className="text-primary py-3">Dashboard de vendas</h1>

                    <div className="row px-3">
                        <div className="col-sm-6">
                            <h5 className="text-center text-secondary">Taxa de sucesso (%)</h5>
                            <BarChart />
                        </div>
                        <div className="col-sm-6">
                            <h5 className="text-center text-secondary">Todas vendas</h5>
                            <DonutChart />
                        </div>
                    </div>

                    <div className="py-3">
                        <h2 className="text-primary">Todas vendas</h2>
                    </div>

                    <DataTable />
                </div>
                <Footer />
            </>
        </div>
    );
}

export default Dashboard;
