import logo from './logo.svg';
import './App.css';
import React  from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid'; // Grid version 1
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Menu from './components/Menu';
import OrganisationTable from './components/Organisation/OrganisationTable';
import ClientTable from './components/Client/ClientTable';
import { BrowserRouter as Router, Route, Link,Routes } from "react-router-dom";
function App() {
  //  const [data, setData] = useState(sampleData);
      return (
          <Grid container spacing={2}>
              <Grid xs={12}>
                  <Container maxWidth="sm">
                      <Box sx={{ bgcolor: '#cfe8fc', height: '20vh' }} />
                  </Container>
              </Grid>
              <Router>
                  <Grid xs={2}>
                      <Container maxWidth="sm">
                          <Menu></Menu>
                      </Container>
                  </Grid>
                  <Grid xs={10}>
                      <Container maxWidth="xl">
                          <Routes>
                              <Route path="/myorg" element={<OrganisationTable />} />
                              <Route path="/client" element={<ClientTable />} />
                          </Routes>
                      </Container>
                  </Grid>
              </Router>
          </Grid>
      );
}

export default App;
