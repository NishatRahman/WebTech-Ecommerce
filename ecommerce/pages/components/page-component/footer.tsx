import React from "react";
import {
  InputFeild,
  InputLabel,
  InputWrapper,
  Logo,
  SubmitButton,
} from "./commons";
import { Box, Container, Row, Column, Title, Item } from "./footer-style";

const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
            <Item>
              <InputWrapper>
                <Logo
                  src="/location.png"
                  alt={"Avatar"}
                  style={{
                    marginRight: "20px",
                  }}
                ></Logo>
                <div>Akhalia, Sylhet</div>
              </InputWrapper>
            </Item>
            <Item>
              <InputWrapper>
                <Logo
                  src="/email.png"
                  alt={"Avatar"}
                  style={{
                    marginRight: "20px",
                  }}
                ></Logo>
                <div>support.abc@gmail.com</div>
              </InputWrapper>
            </Item>
            <Item>
              <InputWrapper>
                <Logo
                  src="/phone-call.png"
                  alt={"Avatar"}
                  style={{
                    marginRight: "20px",
                  }}
                ></Logo>
                <div>+8801234567891</div>
              </InputWrapper>
            </Item>        
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;
