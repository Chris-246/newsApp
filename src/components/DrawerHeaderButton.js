import React from 'react';
import { HeaderButton } from 'react-navigation-header-buttons';
import { MaterialIcons } from '@expo/vector-icons';

const DrawerHeaderButtons = props => (
        <HeaderButton {...props} IconComponent={MaterialIcons} iconSize={24}/>
    );

export default DrawerHeaderButtons;