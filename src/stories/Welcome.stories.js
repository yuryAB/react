import React from 'react';
import { action } from "@storybook/addon-actions";

import {Welcome} from '../screens/Welcome/dumb';

export default {
    title: 'Welcome'
};

export const WelcomeShit = () => (
    <Welcome 
    onCPFReady={action('onCPFReady')}
    nextPage={action("Passando para a proxima página")} />
);