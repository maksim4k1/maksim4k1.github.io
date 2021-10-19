import AppRoutes from './components/AppRoutes';
import Footer from './components/UI/Footer';
import Header from './components/UI/Header';
import AboutPage from './pages/AboutPage';
import CertificatesPage from './pages/CertificatesPage';
import ContactsPage from './pages/ContactsPage';
import Error404 from './pages/errors/Error404';
import MainPage from './pages/MainPage';
import PortfolioPage from './pages/PortfolioPage';
import './styles/App.scss';

const routes = [
  {path: "/", component: MainPage, exact: true},
  {path: "/about", component: AboutPage, exact: true},
  {path: "/certificates", component: CertificatesPage, exact: true},
  {path: "/portfolio", component: PortfolioPage, exact: true},
  {path: "/contacts", component: ContactsPage, exact: true},
  {path: "/error/404", component: Error404, exact: true},
];

function App() {
  return (
    <div className="App">
      <Header/>
      <AppRoutes routes={routes}/>
      <Footer/>
    </div>
  );
}

export default App;