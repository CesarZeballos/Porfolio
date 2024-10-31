import { styled, TextField } from "@mui/material";


export const CustomInput = styled(TextField)({
    '& label.Mui-focused': {
      color: '#C2F22D',
    },
    '& label': {
      color: '#DBE2EC',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#DBE2EC',
      },
      '&:hover fieldset': {
        borderColor: '#C2F22D',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#C2F22D',
      },
      '& input': {
      color: '#DBE2EC',
    },
    '& textarea': {
        color: '#DBE2EC',
    }
    },
    '& .MuiFormHelperText-root': {
    color: '#C2F22D',
    },
  });