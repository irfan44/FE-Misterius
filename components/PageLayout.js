import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PageLayout = ({children}) => {
    return (<>
        <Header/><main className="mx-auto max-w-screen-xl py-6">{children}</main><Footer /></>)
};

export default PageLayout;