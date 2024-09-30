import Footer from "components/Footer";
export default function WebLayout({ children }:any) {
  return (
    <>
      
      <main>
      {children}
      </main>
      <Footer />
      
      
      
      
    </>
  );
}