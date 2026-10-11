// import { Suspense } from "react";
// import { Outlet } from "react-router-dom";
// import ScrollToTop from "../../helpers/ScrollToTop";
// import MainLoader from "../main-loader";

// const Layout = () => {
//   return (
//     <Suspense fallback={<MainLoader />}>
//       <ScrollToTop />
//       <Outlet />
//     </Suspense>
//   );
// };

// export default Layout;
// مثال على تصميم RootLayout
import { Outlet } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

export default function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet /> {/* ستظهر هنا الصفحات بناءً على المسار */}
      </main>
      <Footer />
    </>
  );
}