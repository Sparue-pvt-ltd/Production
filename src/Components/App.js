import "../styles.css";
import Navbar from "./Navbar";
import MainContain from "./MainContain";
import ManagedCloud from "./services/MangedCloud";
import ServicesSection from "./services/serviceSection";
import { Route, Switch, Redirect } from "react-router-dom";
import CaseStudy from "./CaseStudy/casestudy";
import Section6 from "./section-6";
import Footer from "./footer";
import AWSDevOPs from "./services/AWSDEVOPS";
import Notfound from "./notfoun";
import DataMigration from "./services/dataMigration";
export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={MainContain} />
        <Route exact path="/Services" component={ManagedCloud} />
        <Route exact path="/Services/managedCloud" component={ManagedCloud} />

        <Route
          exact
          path="/Services/securityCloud"
          component={ServicesSection}
        />
        <Route exact path="/CaseStudy" component={CaseStudy} />

        <Route
          exact
          path="/Services/AWSdatamigration"
          component={DataMigration}
        />
        
        <Route exact path="/Services/AWSdevops" component={AWSDevOPs} />
        <Route exact path="/not-found" component={Notfound} />
        <Redirect exact to="/not-found" />
      </Switch>
      <Section6 />
      <Footer />
    </div>
  );
}
