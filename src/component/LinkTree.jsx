import React, { Component, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/LinkTree.css";
import { Container, Image } from "react-bootstrap";
import profil from "../images/profil.jpg";
import LinkList from "./LinkList";

class LinkTree extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <div className="introduction my-5">
            <Image
              src={profil}
              className="profile-img mb-2"
              alt="my-profile"
              roundedCircle
            />
            <h1 className="text-center text-white">David Chandra</h1>
          </div>
        </Container>
        <Container>
          <div className="link-list">
            <LinkList
              links="https://www.instagram.com/vidchandra/"
              name="Instagram"
            />
            <LinkList
              links="https://www.youtube.com/channel/UCYnki-gfdI19b6qFgPJwdDw"
              name="Youtube"
            />
            <LinkList links="https://twitter.com/vidchandraa" name="Twitter" />
            <LinkList links="https://github.com/dvidchandra" name="Github" />
          </div>
        </Container>
      </Fragment>
    );
  }
}

export default LinkTree;
