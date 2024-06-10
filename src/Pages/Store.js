import StoreItem from "../components/Store_Item"
import Navbar from "../components/navbar";
import NavbarStore from "../components/Navbar_Store"
import Lens from "./Lens";
import Accessori from "./Accessori"
function Store() {

  return (
    <>
   
      
      <Navbar />
      <NavbarStore />
      <Lens/>
      <StoreItem />
      <Accessori />
    </>
  );
}


export default Store;
