import React, { Fragment } from "react"
import Helmet from "react-helmet"
import styled from "styled-components"

import Layout from "../templates/Layout"
import CourseOptionsEditor from "../components/user/CourseOptionsEditor"
import { navigate } from "gatsby"
import LoginStateContext, {
  withLoginStateContext,
} from "../contexes/LoginStateContext"
import Container from "../components/Container"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckCircle as icon } from "@fortawesome/free-solid-svg-icons"

import Snackbar from "@material-ui/core/Snackbar"
import SnackbarContent from "@material-ui/core/SnackbarContent"

const StyledSnackbarContent = styled(SnackbarContent)`
  background-color: #43a047 !important;
`

const StyledIcon = styled(FontAwesomeIcon)`
  margin-right: 0.5rem;
`

class MissingInfo extends React.Component {
  static contextType = LoginStateContext

  state = {
    successMessage: null,
  }

  onStepComplete = () => {
    this.setState({ successMessage: "Tiedot tallennettu!" })
  }

  handleClose = () => {
    this.setState({ successMessage: null })
  }

  render() {
    if (!this.context.loggedIn) {
      if (typeof window !== "undefined") {
        navigate("/sign-in")
      }
      return <div>Redirecting...</div>
    }
    return (
      <Layout>
        <Container>
          <Helmet title="Profiili" />

          <CourseOptionsEditor onComplete={this.onStepComplete} />
        </Container>
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          open={this.state.successMessage}
          autoHideDuration={6000}
          onClose={this.handleClose}
        >
          <StyledSnackbarContent
            variant="success"
            message={
              <Fragment>
                <StyledIcon icon={icon} />{" "}
                <span>{this.state.successMessage}</span>
              </Fragment>
            }
          />
        </Snackbar>
      </Layout>
    )
  }
}

export default withLoginStateContext(MissingInfo)
