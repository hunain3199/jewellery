import Footer from "components/layout/footer";

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