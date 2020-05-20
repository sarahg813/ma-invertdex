import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Container } from "reactstrap";
import "../../styles/animation.css";
import AdminPage from "../AdminPage";
import HomePage from "../HomePage";
import StudiosListPage from "../StudiosListPage";
import StudioPage from "../StudioPage";
import SearchResultsPage from "../SearchResultsPage";
import StudiosMapPage from "../StudiosMapPage";
import "./MainContainer.scss";

const MainContainer = ({ location }) => {
  const currentKey = location.pathname.split("/")[1] || "/";

  return (
    <Container className="main-container">
      <TransitionGroup className="transtion-group">
        <CSSTransition key={currentKey} classNames="fade" timeout={300} appear>
          <section className="route-section" style={{ height: "100%" }}>
            <Switch location={location}>
              <Route exact path="/" component={HomePage} />
              <Route path="/studioslist" component={StudiosListPage} />
              <Route path="/profile/:id" component={StudioPage} />
              <Route path="/admin" component={AdminPage} />
              <Route path="/results" component={SearchResultsPage} />
              <Route path="/studiosmap" component={StudiosMapPage} />
            </Switch>
          </section>
        </CSSTransition>
      </TransitionGroup>
    </Container>
  );
};

export default withRouter(MainContainer);
