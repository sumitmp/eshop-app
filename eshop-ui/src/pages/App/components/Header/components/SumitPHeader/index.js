import React from "react"
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
//
import { beforeLogin } from "../../HeaderConstant"

const highlighter = "#F7941D";
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    button: {
        margin: theme.spacing(0),
        borderLeft: "1px solid #f0f0f0",
        "&:first-child": {
            borderLeft: "none",
        }
    },
    buttonRoot: {
        textTransform: "none",
        padding: "0px 13px"
    },
    label: {
        color: "#333",
        "&:hover": {
            color: highlighter
        }
    },
    startIcon: {
        color: highlighter,
        fontDize: "15px"
    },
    textSecondary: {
        backgroundColor: "transparent",
        "&:hover": {
            backgroundColor: "transparent",
        }
    },
    gridRoot: {
        display : "flex"
    }
}));

function SumitPHeader() {
    const classes = useStyles()

    const renderLinks = () => {
        return (
            beforeLogin.map(row => {
                return (
                    <Button
                        classes={{
                            label: classes.label,
                            root: classes.buttonRoot,
                            startIcon: classes.startIcon,
                            textSecondary: classes.textSecondary
                        }}
                        variant="text"
                        color="secondary"
                        startIcon={row.icon}
                        disableRipple={true}
                        className={classes.button}
                    >
                        {row.name}
                    </Button>
                )
            })
        )
    }

    return (
        <div >
            <Container maxWidth="Lg">
                <Grid container className={classes.root} spacing={2}>
                    <Grid item xs={6}></Grid>
                    <Grid classes={{root : classes.gridRoot}} item xs={6} alignItems="flex-end" justify="flex-end">
                        {renderLinks()}
                    </Grid>
                </Grid>
            </Container>

        </div>
    )
}
export default SumitPHeader