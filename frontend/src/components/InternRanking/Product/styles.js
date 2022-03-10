import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
  internCardContainer: ({ isMobile }) => ({
    display: 'flex',
    flexDirection: 'column',
    width: isMobile ? '100%' : '328px',
    height: isMobile && 442,
    background: isMobile && '#FFF',
    borderRadius: isMobile && 8,
    boxShadow: isMobile && '1px 2px 3px rgb(0 0 0 / 5%)',
  }),
  imageContainer: {
    width: '100%',
    height: 442,
    position: 'relative',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    // boxShadow: '2px 2px 2px 0px rgb(0 0 0 / 20%)',
  },
  image: ({ isMobile }) => ({
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '8px',
  }),
  favoriteWrapper: {
    position: 'absolute',
    right: 19,
    top: 14,
    display: 'flex',
    flexDirection: 'row',
  },
  favoriteContainer: ({ primaryColor }) => ({
    borderRadius: '50%',
    width: 30,
    height: 30,
    background: '#FAFAFA',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }),
  favoriteLabel: {
    fontSize: 12,
  },
  yourtakeContainer: {
    position: 'absolute',
    bottom: 33,
    width: '100%',
    height: '167px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  yourtakeWrapper: {
    width: '252px',
    height: '100%',
    borderRadius: 8,
    background: '#FFF',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  whatyourtake: ({ primaryFont }) => ({
    ...primaryFont,
    fontSize: 16,
    marginTop: 12,
  }),
  startButton: ({ primaryFont, primaryColor }) => ({
    ...primaryFont,
    fontSize: 14,
    width: 170,
    height: 48,
    marginTop: 10,
    background: primaryColor,
    borderRadius: 10,
    color: '#FFF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&:hover': {
      cursor: 'pointer',
    },
  }),
});