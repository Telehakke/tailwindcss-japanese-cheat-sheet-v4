import Contents from "./views/contents/contents";
import Controller from "./views/controller/controller";
import CopiedMessageBox from "./views/copiedMessageBox";
import Footer from "./views/footer";
import Header from "./views/header";
import Sidebar from "./views/sidebar";

const App = () => {
    return (
        <>
            <div class="space-y-4 p-4">
                <Header />
                <Controller />
                <Contents />
                <Footer />
            </div>
            <Sidebar />
            <CopiedMessageBox />
        </>
    );
};

export default App;
