import { Mixpanel } from './mixpanel';

export const visitPage = () => {
    Mixpanel.track('Home viewed');
};