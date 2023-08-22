import { Box, styled } from '@mui/material';

type IAppStyle = {
  mobile: boolean;
};

export const AppStyle = styled(Box)<IAppStyle>(({ theme, mobile }) => ({
  padding: '10px',
  margin: '10px',
  backgroundColor: mobile ? 'none' : '#9fc8e9',
}));

export const MainInfoAppStyle = styled(Box)<IAppStyle>(({ theme, mobile }) => ({
  height: '100vh',
  backgroundImage: 'url(https://nt.ua/Media/Default/img/profession-frontenf-dev_ru.png)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: mobile ? 'cover' : 'contain',
  backgroundColor: mobile ? '#f2efef' : 'none',
}));

export const MainInfoBlockStyle = styled(Box)<IAppStyle>(({ theme, mobile }) => ({
  backgroundSize: mobile ? 'contain' : 'contain',
  backgroundColor: mobile ? '#d5cdd2' : '#caf4db',
  border: '3px solid black',
}));
