import Header from "./views/header";
import Footer from "./views/footer";
import CheatSheetController from "./views/controller/cheatSheetController";
import Contents from "./views/contents/contents";
import Sidebar from "./views/sidebar";

const App = () => {
    return (
        <>
            <div className="space-y-4 p-4">
                <Header />
                <CheatSheetController />
                <Contents />
                <Footer />
            </div>
            <Sidebar />
        </>
    );
};

export default App;
