
import React  from 'react';
import Box from '@mui/material/Box';
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
import { NavLink } from "react-router-dom";
function Menu() {
      return (
            <Box sx={{ height: 220, flexGrow: 1, maxWidth: 400 }}>


                <br/>

                <SimpleTreeView>
                    <TreeItem itemId="m-Organasation" label="Organasation">
                        <TreeItem itemId="m-myOrganasation" label={<NavLink to="/myorg">My Organsation</NavLink>}/>
                            {/*<NavLink to="/myorg">My Organsation"</NavLink>*/}

                        <TreeItem itemId="m-myPartner" label="My Partner" />
                    </TreeItem>
                    <TreeItem itemId="m-calendar" label="My Calendar"/>
                    <TreeItem itemId="m-client" label={ <NavLink to="/client/">Client</NavLink>}/>
                    <TreeItem itemId="m-myslef" label="My Self"/>
                </SimpleTreeView>
            </Box>
      );
}
export default Menu;


