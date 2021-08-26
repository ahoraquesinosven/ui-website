import moment from 'moment';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const Date = ({ date, format, ...rest }) => {
  const parsedDate = moment(date);

  const tooltip = (
    <Tooltip>
      {parsedDate.calendar()}
    </Tooltip>
  );

  return (
    <OverlayTrigger placement="right" overlay={tooltip}>
      <span {...rest}>{format(parsedDate)}</span>
    </OverlayTrigger>
  );
};

export default Date;
