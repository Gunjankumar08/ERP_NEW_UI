import { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Components from './pages/Components';
import PayfeeTable from './pages/PayFee/PayfeeTable';
import payfee from './pages/PayFee/payfee';

import Profile from './pages/Profile';
import Navbar from './components/Navbar'
import './styles.scss';
import about from './pages/NavbarPages/about';
import contactUs from './pages/NavbarPages/contactUs';
import Login from './pages/Auth/Login';
import Table from './pages/Reception/Table';
import Form from './pages/Reception/Form';

import { useHistory } from 'react-router-dom';
import Settinglogin from './pages/Settings/Settinglogin';
import Settings from './pages/Settings/Settings';
import classTable from './pages/Settings/AddClass/classTable';
import addClass from './pages/Settings/AddClass/addClass';

import sectionTable from './pages/Settings/AddSection/sectionTable';
import addSection from './pages/Settings/AddSection/addSection';

import hostelTable from './pages/Settings/AddHostel/hostelTable';
import addHostel from './pages/Settings/AddHostel/addHostel';

import busRootTable from './pages/Settings/BusRoot/busRootTable';
import AddBusRoot from './pages/Settings/BusRoot/AddBusRoot';

import extraFeeTable from './pages/Settings/ExtraFeeStructure/extraFeeTable';
import addExtraFee from './pages/Settings/ExtraFeeStructure/addExtraFee';

import extraHostelFeeTable from './pages/Settings/HostelExtraFeeStructure/extraHostelFeeTable';
import addHostelExtraFee from './pages/Settings/HostelExtraFeeStructure/addHostelExtraFee';

import discountTable from './pages/Settings/FeeDiscount/discountTable';
import AddDiscount from './pages/Settings/FeeDiscount/AddDiscount';

function App() {
  let history= useHistory()
  // if(!localStorage.getItem('auth-token')){
  //   history.push('/login')
  // }
  const [collapsed, setCollapsed] = useState(false);
  const [image, setImage] = useState(false);
  const [toggled, setToggled] = useState(false);

  const handleCollapsedChange = () => {
    setCollapsed(!collapsed);
  };

  const handleImageChange = (checked) => {
    setImage(checked);
  };

  const handleToggleSidebar = (value) => {
    setToggled(value);
  };

  return (
    <>
    {!localStorage.getItem('auth-token')?
    <div className={`app ${toggled ? 'toggled' : ''}`}>
      <Sidebar
        image={image}
        collapsed={collapsed}
        toggled={toggled}
        handleToggleSidebar={handleToggleSidebar}
        handleCollapsedChange={handleCollapsedChange}
      />
      <main>
        <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
          <FaBars />
        </div>
        <Navbar/>
        <Switch>
        <Route  path="/table" component={Table} />
        <Route  path="/form" component={Form} />

          <Route  path="/about" component={about} />
          <Route  path="/contactUs" component={contactUs} />
          <Route  path="/login" component={Login} />
          <Route path="/components" component={Components} />
          <Route path="/payfee" component={PayfeeTable} />
          <Route path="/payfees" component={payfee} />
          <Route path="/profile" component={Profile} />
          <Route path="/setting-login" component={Settinglogin} />
          <Route path="/settings" component={Settings} />

          <Route path="/class_table" component={classTable} />
          <Route path="/add_class" component={addClass} />

          <Route path="/section_table" component={sectionTable} />
          <Route path="/add_section" component={addSection} />

          <Route path="/hostel_table" component={hostelTable} />
          <Route path="/add_hostel" component={addHostel} />

          <Route path="/busroot_table" component={busRootTable} />
          <Route path="/add_busroot" component={AddBusRoot} />

          <Route path="/extrafee_table" component={extraFeeTable} />
          <Route path="/add_extrafee" component={addExtraFee} />

          <Route path="/hostel_extrafee_table" component={extraHostelFeeTable} />
          <Route path="/add_hostel_extrafee" component={addHostelExtraFee} />

          <Route path="/discount_table" component={discountTable} />
          <Route path="/add_discount/:id" component={AddDiscount} />

          <Route path="/not-found" component={NotFound} />
          <Route path="/" exact>
            <Home image={image} handleImageChange={handleImageChange} />
          </Route>
          <Redirect to="/not-found" />
        </Switch>
        <Footer />
      </main>
    </div>:
    <Switch>
      <Route  path="/login" component={Login} />
      <Route  path="/" component={Login} />
      {/* <Redirect to="/not-found" /> */}
      history.push('/login')
    </Switch>
    }
    </>
  );
}

export default App;
