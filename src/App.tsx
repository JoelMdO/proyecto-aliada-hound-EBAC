import "./styles/main.scss";
import Header from "./components/header";
import BannerSection from "./components/banner_section";
import FormSection from "./components/form_section";
import PanelSection from "./components/panel_section";
import ListSection from "./components/list_section";
import Footer from "./components/footer";
import { useState } from "react";

function App() {
  //
  const [updateListSection, setListSectionToUpdate] = useState<boolean>(false);
  //
  return (
    <>
      <Header />
      <BannerSection />
      <FormSection setListSectionToUpdate={setListSectionToUpdate} />
      <PanelSection />
      <ListSection updateListSection={updateListSection} />
      <Footer />
    </>
  );
}

export default App;
