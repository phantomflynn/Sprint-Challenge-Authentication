import glamorous from 'glamorous';

export const Container = glamorous.div({
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  width: '100%',
  height: '25%',
  margin: 'auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignContent: 'center'
});

export const Input = glamorous.input({
  margin: 'auto',
  width: '23%',
  height: '20%',
  padding: '0 1% 0 1%',
  fontSize: '1.5rem',
  border: 'none',
  borderBottom: '1px solid white',
  fontWeight: 'bold',
  color: 'white',
  textAlign: 'center'
});

export const ButtonContainer = glamorous.div({
  margin: 'auto',
  width: '23%',
  height: '20%',
  display: 'flex',
  justifyContent: 'space-between'
});

export const Button = glamorous.button({
  width: '47%',
  borderRadius: '3px',
  backgroundColor: 'transparent',
  color: 'white',
  fontWeight: 600,
  border: '1px solide white',
  ':hover': { color: 'black', backgroundColor: 'white', cursor: 'pointer' },
  ':focus': { color: 'black', backgroundColor: 'white' }
});