import { Mixpanel } from './mixpanel';

export const visitPage = (page) => {
    Mixpanel.track(page);
};

export const trackEvent = (action, props) => {
    Mixpanel.track(action, props);
};