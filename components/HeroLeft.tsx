import React from 'react';
import { createStyles, Overlay, Container, Title, Button, Text, Image } from '@mantine/core';
// import { sherb } from '../components/sherbie.jpg'

const useStyles = createStyles((theme) => ({
  hero: {
    position: 'relative',
    backgroundImage: 'url(https://lh3.googleusercontent.com/pLjuPwc1x5x04wPuS5-V8DR6L_gC0Ic0JN2zHlaST43xa1hVywgMInueEhydQxGVXXKjGeuKRaBZdCvo0fLMRxRlgzAf4UJFJPn18BnMeJSdl8qnmLanz4mrhXfYMtz1Cl2JALHYdrqBTnPBcQQOoxPa1z7p7qbJUOA83kZv4Ppo4hAIkcebFfKhNz47gLWajsO0gC21FTE-njnHMl_oqAsQkR9KA7Tp5H5Qnqc9fWRloyVH_soPvtpkJagj8kaiHiEsvXThXH3rNzN1NBrA2x2N0XyLFPNDjWjY2slqh5ndx9C-pFKYQFgSJUQm6O4TwoVeCL4TiEzIWRIMBkNcHWbzOvmliR-AQ7oVFxgN-vgYS_d6mvQGLIqpiaO8pFvsFeryPen2ldrBUkPixMZJCGRjR8xYXyq-CzKEICrbZ96Uh1mxq7kNx0fqNu4Bvnwj_BsjoQTNor1Ov5VhfiWSWbdbmdqGuc4biiVomvqcMurwJRuZLagerFocXwJvwCsE5BHFrBH8QhDWg26qtJazbHNYwPGnQuRsmLJbp_MYFI_Fovfkg36lk54nyw9mUWMJbMyV-Q30hOtILRxbENQ9BV4USwRPwAj21dRli0-ORkgxJ744FOQxB37g67ggKZSipjaPqDWCyY9J6_beL6B1UAY5qWS2h8lvrEdEM85L-HIbl-CTAG9h_LZeF21AN9qZdoLNBoGMUx2YiC3-7R51t7UAM3p3tgRNZrGUt70gkI9AUeT3SbGCf3VAW1xpn_uKN4eYOO0hXw35TsjJGG3uES56TB83xBTE8lg-=w1167-h878-no?authuser=0)',
    // ({<Image src={'http://innopizza.s3-eu-west-2.amazonaws.com/abc.jpg'} />}),
    //    'url(https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)',
       backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  container: {
    height: 700,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingBottom: theme.spacing.xl * 6,
    zIndex: 1,
    position: 'relative',

    [theme.fn.smallerThan('sm')]: {
      height: 500,
      paddingBottom: theme.spacing.xl * 3,
    },
  },

  title: {
    color: theme.white,
    fontSize: 60,
    fontWeight: 900,
    lineHeight: 1.1,

    [theme.fn.smallerThan('sm')]: {
      fontSize: 40,
      lineHeight: 1.2,
    },

    [theme.fn.smallerThan('xs')]: {
      fontSize: 28,
      lineHeight: 1.3,
    },
  },

  description: {
    color: theme.white,
    maxWidth: 600,

    [theme.fn.smallerThan('sm')]: {
      maxWidth: '100%',
      fontSize: theme.fontSizes.sm,
    },
  },

  control: {
    marginTop: theme.spacing.xl * 1.5,

    [theme.fn.smallerThan('sm')]: {
      width: '100%',
    },
  },
}));

export function HeroContentLeft() {
  const { classes } = useStyles();

  return (
    <div className={classes.hero}>
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={1}
        zIndex={0}
      />
      <Container className={classes.container}>
        <Title className={classes.title}>My dog deserves the best</Title>
        <Text className={classes.description} size="xl" mt="xl">
          Including the best website – it's not done yet, but anyway, you can't rush perfection. TEST: God, ton, surh, ont, ubt
        </Text>

        <Button variant="gradient" size="xl" radius="xl" className={classes.control}>
          Get started
        </Button>
      </Container>
    </div>
  );
}