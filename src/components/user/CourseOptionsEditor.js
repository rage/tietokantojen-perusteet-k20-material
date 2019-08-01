import React from "react"
import {
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  Radio,
  RadioGroup,
  Card,
  CardContent,
} from "@material-ui/core"

import { OutboundLink } from "gatsby-plugin-google-analytics"

import Loading from "../Loading"

import {
  updateUserDetails,
  userDetails,
  getCourseVariant,
} from "../../services/moocfi"

import styled from "styled-components"
import withSimpleErrorBoundary from "../../util/withSimpleErrorBoundary"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInfoCircle as icon } from "@fortawesome/free-solid-svg-icons"

const Row = styled.div`
  margin-bottom: 1.5rem;
`

const Form = styled.form``

const InfoBox = styled.div`
  margin-bottom: 2rem;
`

const FormContainer = styled.div`
  height: 100%;
  margin-top: 2rem;
`

const StyledIcon = styled(FontAwesomeIcon)`
  margin-right: 0.25rem;
`

class CourseOptionsEditor extends React.Component {
  async componentDidMount() {
    const data = await userDetails()
    const courseVariant = await getCourseVariant()
    this.setState(
      {
        first_name: data.user_field?.first_name,
        last_name: data.user_field?.last_name,
        student_number: data.user_field?.organizational_id,
        participates_in_real_tilpe:
          data.extra_fields?.participates_in_real_tilpe === "t",
        digital_education_for_all:
          data.extra_fields?.digital_education_for_all === "t",
        marketing: data.extra_fields?.marketing === "t",
        research: data.extra_fields?.research,
        currentCourseVariant: courseVariant,
        loading: false,
      },
      () => {
        this.validate()
      },
    )
  }

  onClick = async e => {
    e.preventDefault()
    this.setState({ submitting: true })
    let extraFields = {
      participates_in_real_tilpe: this.state.participates_in_real_tilpe,
      digital_education_for_all: this.state.digital_education_for_all,
      marketing: this.state.marketing,
      research: this.state.research,
    }
    if (this.props.courseVariant) {
      extraFields["course_variant"] = this.props.courseVariant
    }
    const userField = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      organizational_id: this.state.student_number,
    }
    await updateUserDetails({
      extraFields,
      userField,
    })
    this.setState({ submitting: false })
    this.props.onComplete()
  }

  state = {
    submitting: false,
    error: false,
    errorObj: {},
    participates_in_real_tilpe: false,
    digital_education_for_all: false,
    marketing: false,
    research: undefined,
    first_name: undefined,
    last_name: undefined,
    student_number: undefined,
    loading: true,
    focused: null,
  }

  handleInput = e => {
    const name = e.target.name
    const value = e.target.value
    this.setState({ [name]: value }, () => {
      this.validate()
    })
  }

  handleCheckboxInput = e => {
    const name = e.target.name
    const value = e.target.checked
    this.setState({ [name]: value }, () => {
      this.validate()
    })
  }

  handleFocus = e => {
    const name = e.target.name
    this.setState({ focused: name })
  }

  handleUnFocus = () => {
    this.setState({ focused: null })
  }

  validate = () => {
    /*this.setState(prev => ({
      error: prev.research === undefined,
    }))*/
  }

  render() {
    return (
      <FormContainer>
        <h1>Opiskelijan tiedot</h1>
        <Form>
          <InfoBox />
          <Loading loading={this.state.loading} heightHint="490px">
            <div>
              <Row>
                <TextField
                  variant="outlined"
                  type="text"
                  label="Etunimi"
                  autoComplete="given-name"
                  name="first_name"
                  InputLabelProps={{
                    shrink:
                      this.state.first_name ||
                      this.state.focused === "first_name",
                  }}
                  fullWidth
                  value={this.state.first_name}
                  onChange={this.handleInput}
                  onFocus={this.handleFocus}
                  onBlur={this.handleUnFocus}
                />
              </Row>

              <Row>
                <TextField
                  variant="outlined"
                  type="text"
                  label="Sukunimi"
                  autoComplete="family-name"
                  name="last_name"
                  InputLabelProps={{
                    shrink:
                      this.state.last_name ||
                      this.state.focused === "last_name",
                  }}
                  fullWidth
                  value={this.state.last_name}
                  onChange={this.handleInput}
                  onFocus={this.handleFocus}
                  onBlur={this.handleUnFocus}
                />
              </Row>

              <Row>
                <TextField
                  variant="outlined"
                  type="text"
                  label="Helsingin yliopiston opiskelijanumero"
                  name="student_number"
                  InputLabelProps={{
                    shrink:
                      this.state.student_number ||
                      this.state.focused === "student_number",
                  }}
                  fullWidth
                  value={this.state.student_number}
                  onChange={this.handleInput}
                  helperText="Jätä tyhjäksi, jos et ole tällä hetkellä Helsingin yliopiston opiskelija."
                  onFocus={this.handleFocus}
                  onBlur={this.handleUnFocus}
                />
              </Row>
            </div>
          </Loading>

          <Row>
            <Button
              onClick={this.onClick}
              disabled={this.state.submitting || this.state.error}
              variant="contained"
              color="primary"
              fullWidth
            >
              Tallenna
            </Button>
          </Row>
        </Form>
      </FormContainer>
    )
  }
}

export default withSimpleErrorBoundary(CourseOptionsEditor)
