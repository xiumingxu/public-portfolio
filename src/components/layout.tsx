import React from "react"
import Sticky from "react-stickynode"
import { ThemeProvider } from "styled-components"
import ScrollToTop from "react-scroll-up"
import Navbar from "./Navbar/navbar"
import Footer from "./Footer/footer"
import ScrollUpButton from "./ScrollUpButton/scrollUpButton"
import ResetCss from "./resetCSS"
import { theme } from "../theme"
import SocialPros from "../common/SocialProfile/SocialPros"


// import SmoothScroll from 'smooth-scroll'



type LayoutProps = {
  children: React.ReactNode
}

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {

  
  //   // eslint-disable-next-line global-require
  //   SmoothScroll('a[href*="#"]',{speed: 300,
  //     speedAsDuration: true}
  // );
  
  
  return (
    <ThemeProvider theme={theme}>
      <>
        <ResetCss />
        <Sticky top={0} innerZ={9999} activeClass="nav-sticky">
          <Navbar />
        </Sticky>

        {children}

        
        <Footer>
          Copyright &copy; {new Date().getFullYear()}
          <a href="https://xiumingxu.com"> Xiuming Xu -XX.</a>
        
        <SocialPros/>
        </Footer>
        <ScrollToTop
          showUnder={300}
          duration={700}
          easing="easeInOutCubic"
          style={{ bottom: 30, right: 20 }}
        >
          <ScrollUpButton />
        </ScrollToTop>
      </>
    </ThemeProvider>
  )
}

export default Layout
