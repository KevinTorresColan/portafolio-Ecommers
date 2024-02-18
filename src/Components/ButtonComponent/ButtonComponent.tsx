import { Button } from '@mui/material';

interface Props {
  name: string;
  onClick: (param?: any) => void; 
  className?: string;
  disabled?: boolean;
}

function ButtonComponent({ name, onClick, className, disabled }: Props) {
  return (
    <Button
      className={className}
      size="medium"
      onClick={onClick}
      fullWidth
      sx={{
        textTransform: 'none',
        color: 'white',
        bgcolor: 'black',
        '&:hover': {
          bgcolor: 'white',
          color: 'black',
        },
        '&:disabled': {
          bgcolor: '#e0e0e0',
          color: '#a6a6a6',
          borderColor: '#e0e0e0'
        },
      }}
      disabled={disabled}
    >
      { name }
    </Button>
  );
}

export default ButtonComponent;