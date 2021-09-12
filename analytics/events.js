import { Mixpanel } from './mixpanel';

export const visitPage = () => {
    Mixpanel.track('Home viewed');
};

export const trackEvent = (action, props) => {
    Mixpanel.track(action, props);
};