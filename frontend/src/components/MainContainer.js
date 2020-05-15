import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Container } from "reactstrap";
import "../styles/animation.css";
import AdminPage from "./AdminPage";
import HomePage from "./HomePage";

const MainContainer = ({ location }) => {
  const currentKey = location.pathname.split("/")[1] || "/";

  return (
    <Container style={{ position: "relative" }}>
      <TransitionGroup className="transtion-group">
        <CSSTransition key={currentKey} classNames="fade" timeout={300} appear>
          <section className="route-section">
            <Switch location={location}>
              <Route exact path="/" component={HomePage} />
              <Route path="/admin" component={AdminPage} />
            </Switch>
          </section>
        </CSSTransition>
      </TransitionGroup>
    </Container>
  );
};

export default withRouter(MainContainer);
