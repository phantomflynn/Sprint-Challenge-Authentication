import glamorous from 'glamorous';

export const Button = glamorous.button({
  width: '7%',
  height: '2rem',
  margin: '1% auto 3%',
  borderRadius: '3px',
  backgroundColor: 'transparent',
  color: 'white',
  fontWeight: 600,
  border: '1px solide white',
  ':hover': { color: 'black', backgroundColor: 'white', cursor: 'pointer' },
  ':focus': { color: 'black', backgroundColor: 'white' }
});

export const JokesContainer = glamorous.div({
  display: 'flex',
  flexFlow: 'column',
  justifyContent: 'center',
  margin: 'auto',
  width: '30%',
});

export const Joke = glamorous.div({
  margin: '2%',
  transition: '0.6s',
  transformStyle: 'preserve-3d',
  transformOrigin: 'center center',
  padding: '2%',
  ':hover': { transform: 'rotateX(180deg)' }
});

export const Front = glamorous.div({
  width: '10%',
  height: '10%',
  color: 'white',
  backfaceVisibility: 'hidden',
  zIndex: 2,
  transform: 'rotateX(0deg)',
  width: '100%'
});

export const Back = glamorous.div({
  width: '10%',
  height: '10%',
  color: 'white',
  backfaceVisibility: 'hidden',
  transform: 'rotateX(-180deg)',
  width: '100%'
});
