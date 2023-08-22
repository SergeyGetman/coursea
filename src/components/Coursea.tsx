import React from 'react';
import Button from './button';
import { useNavigate } from 'react-router-dom';
import { MOCK_DATA } from '../mock';
import { AppStyle } from '../AppStyle.style';
import { useMediaQuery } from '@mui/material';

const Coursea = () => {
  const navigate = useNavigate();

  const mobile = useMediaQuery('(min-width:600px)');
  const handleBack = () => {
    navigate('/');
  };

  return (
    <>
      <AppStyle mobile={mobile}>
        {MOCK_DATA.map((item, index) => (
          <div key={index}>
            <h2>{item.title}</h2>
            <h3>{item.subtitle}</h3>
            {item.sections.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                <h3>{section.heading}</h3>
                {section.content && <h4>{section.content}</h4>}
                {section.contentList && (
                  <ul>
                    {section.contentList.map((listItem, listItemIndex) => (
                      <li key={listItemIndex}>{listItem}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        ))}
      </AppStyle>
      <Button text="BACK" handleClick={handleBack} />
    </>
  );
};

export default Coursea;
