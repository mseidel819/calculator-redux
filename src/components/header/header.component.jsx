import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../store/theme-setter/theme.action";
import { selectTheme } from "../../store/theme-setter/theme.selector";
import { Grid, Typography, IconButton } from "@mui/material";
import { ThemeSlider } from "./header.styles";
import CircleIcon from "@mui/icons-material/Circle";

const Header = () => {
  const dispatch = useDispatch();
  const { themeSet } = useSelector(selectTheme);

  return (
    <Grid
      container
      alignItems="end"
      justifyContent="space-between"
      sx={{ marginBottom: "32px" }}
    >
      <Grid item xs={6}>
        <Typography variant="h1" color="text.secondary">
          calc
        </Typography>
      </Grid>
      <Grid item container xs={6} justifyContent="end">
        <ThemeSlider>
          <Typography variant="body1" color="text.secondary">
            THEME
          </Typography>
          <div>
            <div className="slider-numbers">
              <Typography variant="body1" color="text.secondary">
                1
              </Typography>
              <Typography variant="body1" color="text.secondary">
                2
              </Typography>
              <Typography variant="body1" color="text.secondary">
                3
              </Typography>
            </div>
            <div className="slider-box">
              <IconButton
                onClick={() => dispatch(toggleTheme(themeSet))}
                className="slider-button"
                aria-label="toggle-button"
              >
                <CircleIcon className="toggle-icon" />
              </IconButton>
            </div>
          </div>
        </ThemeSlider>
      </Grid>
    </Grid>
  );
};

export default Header;
