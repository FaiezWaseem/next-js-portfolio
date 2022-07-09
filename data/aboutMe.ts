const style = (props) =>
  `color: var(--chakra-colors-brand-${
    props.colorMode === 'light' ? '600' : '300'
  });font-weight: 500;`;
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const info = (props: any): { input: string; return: string }[] => [
  {
    input: 'self.learnAboutMe()',
    return: 'Loaded data...',
  },
  {
    input: 'self.currentLocation',
    return: '"Karachi, Pakistan"',
  },

  {
    input: 'self.interests',
    return: '["web dev", "Mobile Dev", "Game Dev" , "Anima"]',
  },
  {
    input: 'self.education',
    return: '"BSCS ~Currently Enrolled - University of  SZABIST"',
  },
  {
    input: 'self.skills',
    return:
      '[ "JavaScript", "React Native", "React", "Next.JS", "MySQl ~ SQL", "Boostrap", "Laravel", "git"]',
  },
  {
    input: 'self.contactMe()',
    return: `["<a style="${style(
      props
    )}" rel="noopener" href="https://www.linkedin.com/in/faiez-waseem">LinkedIn</a>", "<a style="${style(
      props
    )}" rel="noopener" href="https://github.com/FaiezWaseem">Github</a>"]`,
  },
];

export default info;
