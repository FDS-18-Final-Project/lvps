import { calcRem } from 'theme/theme';

const FromText = ({ title }) => {
  return (
    <>
      <span>{title}</span>
      <p style={{ textAlign: 'center', marginTop: calcRem(5) }}>From</p>
    </>
  );
};

export default FromText;
