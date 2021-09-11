import mixpanel from 'mixpanel-browser';
mixpanel.init(process.env.NEXT_PUBLIC_MIXPANEL_TOKEN);

let env_check = process.env.NODE_ENV === 'production';

const actions = {
  identify: (id) => {
    if (env_check) mixpanel.identify(id);
  },
  track: (name, props) => {
    if (env_check) mixpanel.track(name, props);
  }
};

export const Mixpanel = actions;
