import React from "react"
import Loading from "../../components/Loading"
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography,
} from "@material-ui/core"
import Coins from "./Coins"

import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import styled from "styled-components"

const StyledTypography = styled(Typography)`
  margin-bottom: 0.5rem !important;
`

const StyledExpansionPanelSummary = styled(ExpansionPanelSummary)`
  div {
    height: 22px;
  }
`

const ExtraDetails = ({ exerciseDetails, onUpdate, noCoins }) => {
  if (!exerciseDetails) {
    return <Loading heightHint="10px" />
  }
  return (
    <div>
      <ExpansionPanel>
        <StyledExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Ohjeet tehtävän palauttamiseen</Typography>
        </StyledExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div>
            <StyledTypography>
              Palauta tehtävä palvelimelle tarkistettavaksi NetBeans
              ohjelmointiympäristössä:{" "}
              <a
                href="https://materiaalit.github.io/tmc-asennus/netbeans/"
                rel="noopener noreferrer"
                target="_blank"
              >
                ohjeet tehtävien palauttamiseen
              </a>
              .
            </StyledTypography>
            <StyledTypography>
              Voit myöhemmin katsoa palautuksiasi Test My Code
              palautusympäristössä{" "}
              <a
                href={`https://tmc.mooc.fi/exercises/${exerciseDetails.id}?use_clients=1`}
                rel="noopener noreferrer"
                target="_blank"
              >
                täältä
              </a>
              .
            </StyledTypography>
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  )
}

export default ExtraDetails
