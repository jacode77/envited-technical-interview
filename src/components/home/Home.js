import React from "react";
import "./Home.css";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { IconContext } from "react-icons";
import { BsBatteryFull, BsBoxArrowUp, BsBook } from "react-icons/bs";
import { ImConnection } from "react-icons/im";
import { GiNetworkBars } from "react-icons/gi";
import { VscTextSize } from "react-icons/vsc";
import { FiCopy } from "react-icons/fi";
import {
  IoRefreshSharp,
  IoLockClosed,
  IoChevronBackOutline,
  IoChevronForwardOutline,
} from "react-icons/io5";

function Home() {
  return (
    <>
      <header>
        <div>9:41</div>
        <div>
          <GiNetworkBars /> <ImConnection /> <BsBatteryFull />
        </div>
      </header>

      <div className="home">
        <Typography
          data-testid="home-container"
          variant="h3"
          className="home-title"
          gutterBottom
        >
          Imagine if
        </Typography>

        <Typography className="home-title-snap" variant="h3">
          Snapchat
        </Typography>
        <Typography variant="h3" className="home-title2" gutterBottom>
          had events.
        </Typography>
        <div style={{ margin: "0 2.5rem" }}>
          <Typography
            variant="body1 "
            sx={{
              color: "#4F4F4F",
              fontSize: "1rem",
              fontWeight: "300",
              boxShadow: "0px 0px 17.6435px rgb(0 0 0 / 5%)",
            }}
          >
            Easily host and share events with your friends across any social
            media.
          </Typography>
        </div>
        <Card className="img-container">
          <CardMedia
            component="img"
            image="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ea95af2d-7f06-4f25-859c-9069519053a7/Landing_page_image.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220930%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220930T223741Z&X-Amz-Expires=86400&X-Amz-Signature=f3479648524b4bccce6582c62768ee8b67dbaee12aca11bfe035ca4ca814d8fc&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Landing%2520page%2520image.svg%22&x-id=GetObject"
            alt="Movie Night Event"
          />
        </Card>
        <Button className="button-main">🎉 Create my event</Button>
        <Container className="iphone-search">
          <Container
            sx={{
              display: "flex",
              alignItems: "center",
              height: "2rem",
              backgroundColor: "#F2F2F2",
              justifyContent: "space-around",
              borderRadius: "8px",
              marginTop: "0.5rem",
            }}
          >
            <div>
              <VscTextSize />
            </div>
            <div>
              <IoLockClosed />
              domain.com
            </div>
            <div>
              <IoRefreshSharp />
            </div>
          </Container>
          <Container
            sx={{
              display: "flex",
              justifyContent: "space-around",
              marginTop: "0.5rem",
            }}
          >
            <IconContext.Provider
              value={{ color: "#2E7CF6", className: "global-class-name" }}
            >
              <div>
                <IoChevronBackOutline />
              </div>
              <div>
                <IoChevronForwardOutline style={{ color: "#CECECE" }} />
              </div>
              <div>
                <BsBoxArrowUp />
              </div>
              <div>
                <BsBook />
              </div>
              <div>
                <FiCopy />
              </div>
            </IconContext.Provider>
          </Container>
          <div
            style={{
              borderRadius: "5px",
              borderTop: "4px black solid",
              width: "50%",
              marginTop: "1.5rem",
            }}
          ></div>
        </Container>
      </div>
    </>
  );
}

export default Home;
