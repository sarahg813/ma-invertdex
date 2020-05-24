import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Container } from "reactstrap";
import AdminPage from "../AdminPage";
import HomePage from "../HomePage";
import StudiosListPage from "../StudiosListPage";
import StudioPage from "../StudioPage";
import SearchResultsPage from "../SearchResultsPage";
import StudiosMapPage from "../StudiosMapPage";

const MainContainer = ({ location }) => {
  const currentKey = location.pathname.split("/")[1] || "/";

  return (
    <Container className="main-root">
      <TransitionGroup>
        <CSSTransition key={currentKey} classNames="fade" timeout={300} appear>
          <section className="section-container">
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
