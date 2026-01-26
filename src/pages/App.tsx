import "../styles/main.scss";
import Header from "../components/header";
import BannerSection from "../components/banner/banner_section";
import FormSection from "../components/form/form_section";
import PanelSection from "../components/panel/panel_section";
import ListSection from "../components/list/list_section";
import Footer from "../components/footer";
//import { useState } from "react";

function App() {
  //
  //const [updateListSection, setListSectionToUpdate] = useState<boolean>(false);
  //
  return (
    <>
      <Header />
      <BannerSection />
      {/* <FormSection setListSectionToUpdate={setListSectionToUpdate} /> */}
      <FormSection />
      <PanelSection />
      {/* <ListSection updateListSection={updateListSection} /> */}
      <ListSection />
      <Footer />
    </>
  );
}

export default App;
