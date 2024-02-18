import { useEffect } from "react";
import FooterComponent from "../../../Components/FooterComponent/FooterComponent";
import Layout from "../../../Components/Layout/Layout"
import PhrasesComponents from "../Components/PhrasesComponents/PhrasesComponents";
import PresentationComponent from "../Components/PresentationComponent/PresentationComponent";
import ProductsComponent from "../Components/ProductsComponent/ProductsComponent";
import { goToTop } from "../../../Util";


const HomePage = () => {

  useEffect(() => {
    goToTop();
  }, [])
  
  return (
    <Layout>
      <PresentationComponent/>
      <PhrasesComponents/>
      <ProductsComponent/>
      <FooterComponent/>
    </Layout>
  )
}

export default HomePage;