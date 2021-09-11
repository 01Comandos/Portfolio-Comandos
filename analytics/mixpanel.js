import mixpanel from 'mixpanel-browser';
mixpanel.init(process.env.MIXPANEL_TOKEN);

let env_check = process.env.NODE_ENV === 'production';

const actions = {
  identify: (id) => {
    if (env_check) mixpanel.identify(id);
  },
  track: (name, props) => {
    console.log(process.env.MIXPANEL_TOKEN, process.env.NODE_ENV);
    if (env_check) mixpanel.track(name, props);
  }
};

export const Mixpanel = actions;
